import React, { useEffect, useState } from "react";
import {
  getAllDocuments,
  getDocumentTypes,
} from "../../api/services/global.service";
import { Card } from "../../components/card/Card.component";
import { Pagination } from "../../components/Pagination/Pagination.component";
import { Selector } from "../../components/selector/Selector.component";
import { HomeStyled } from "./Home.styled";
import { documentTypes as docTypes } from "../../utils/constants/global.constant";

export const Home = () => {
  const [documentTypes, setDocumentTypes] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [currentLimit, setCurrentLimit] = useState(5);
  const [totalNumberDocuments, setTotalNumberDocuments] = useState(0);
  const [documentTypeSelected, setDocumtnTypeSelected] = useState(docTypes.All);
  const currentPage = 1;

  useEffect(() => {
    const documentTypes = getDocumentTypes();
    const documents = getAllDocuments(
      currentLimit,
      currentPage,
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
    refreshDocuments(limit, currentPage, documentTypeSelected);
  };

  const handleChangePage = (page) => {
    refreshDocuments(currentLimit, page, documentTypeSelected);
  };

  const handleFilterByDocumentType = (documentType) => {
    setDocumtnTypeSelected(documentType);
    refreshDocuments(currentLimit, currentPage, documentType);
  };

  return (
    <HomeStyled>
      <div className="home__header">
        <Selector
          options={documentTypes}
          valueByDefault={documentTypes[0]?.type}
          onToogleOption={handleFilterByDocumentType}
        />
        <div>Nuevo</div>
      </div>

      <div className="cards-grid">
        {documents &&
          documents.map((document) => {
            return <Card key={document.id} document={document} />;
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
