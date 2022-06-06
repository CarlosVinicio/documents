// Vendor
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createNewDocument,
  deleteDocument,
  getAllDocuments,
  getDocumentTypes,
} from "../../api/services/global.service";
// Component
import { Card } from "../../components/Card/Card.component";
import { Pagination } from "../../components/Pagination/Pagination.component";
import { Selector } from "../../components/Selector/Selector.component";
import { Button } from "../../components/Button/Button.component";
import { Modal } from "../../components/Modal/Modal.component";
import { FormNewDocument } from "./FormNewDocument.component";
// Styled
import { HomeStyled } from "./Home.styled";
//constants
import {
  documentTypes as docTypes,
  initialCurrentLimit,
} from "../../utils/constants/global.constant";

export const Home = () => {
  const [documentTypes, setDocumentTypes] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [currentLimit, setCurrentLimit] = useState(initialCurrentLimit);
  const [totalNumberDocuments, setTotalNumberDocuments] = useState(0);
  const [documentTypeSelected, setDocumtnTypeSelected] = useState(docTypes.All);
  const initialPage = 1;

  //Modal states
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const documentTypes = getDocumentTypes();
    const documents = getAllDocuments(
      currentLimit,
      initialPage,
      documentTypeSelected
    );

    Promise.all([documentTypes, documents]).then((values) => {
      setDocumentTypes(values[0]);
      setDocuments(values[1].data);
      setTotalNumberDocuments(values[1].totalDocuments);
    });
  }, []);

  const refreshDocuments = (limit, page, documentType) => {
    getAllDocuments(limit, page, documentType).then((response) => {
      setDocuments(response.data);
      setTotalNumberDocuments(response.totalDocuments);
    });
  };

  const handleChangeLimit = (limit) => {
    setCurrentLimit(limit);
    refreshDocuments(limit, initialPage, documentTypeSelected);
  };

  const handleChangePage = (page) => {
    refreshDocuments(currentLimit, page, documentTypeSelected);
  };

  const handleFilterByDocumentType = (documentType) => {
    setDocumtnTypeSelected(documentType);
    refreshDocuments(currentLimit, initialPage, documentType);
  };

  const onConfirmForm = (form) => {
    createNewDocument(form).then(() => {
      refreshDocuments(currentLimit, initialPage, documentTypeSelected);
      setIsOpenModal(false);
    });
  };

  const handleDeleteCard = (id) => {
    deleteDocument(id).then(() => {
      refreshDocuments(currentLimit, initialPage, documentTypeSelected);
    });
  };

  const handleSelectCard = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <HomeStyled>
      <Modal show={isOpenModal}>
        <FormNewDocument
          docTypes={documentTypes}
          onCancel={() => setIsOpenModal(false)}
          onConfirm={onConfirmForm}
        />
      </Modal>
      <div className="home__header">
        <Selector
          options={documentTypes}
          valueByDefault={documentTypes[0]?.type}
          onToogleOption={handleFilterByDocumentType}
        />
        <Button title="Nuevo" handleClickButton={() => setIsOpenModal(true)} />
      </div>
      <div className="cards-grid">
        {documents &&
          documents.map((document) => {
            return (
              <Card
                key={document.id}
                document={document}
                onDeleteCard={handleDeleteCard}
                onSelectCard={handleSelectCard}
              />
            );
          })}
      </div>

      <div className="home__pagination">
        <Pagination
          totalRecords={totalNumberDocuments}
          pageLimit={currentLimit}
          onChangeLimit={handleChangeLimit}
          onChangePage={handleChangePage}
        />
      </div>
    </HomeStyled>
  );
};
