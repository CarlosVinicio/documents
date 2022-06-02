import React, { useEffect, useState } from "react";
import { getAllDocuments, getDocumentTypes } from "../../api/services/global.service";
import { Card } from "../../components/card/Card.component";
import { Selector } from "../../components/selector/Selector.component";
import { HomeStyled } from "./Home.styled";

export const Home = () => {
  const [documentTypes, setDocumentTypes] = useState([]);
  const [documents, setDocuments] = useState([]);

  const [filter, setFilter] = useState();

  useEffect(() => {
    const documentTypes = getDocumentTypes();
    const documents = getAllDocuments();

    Promise.all([documentTypes, documents]).then((values) => {
      setDocumentTypes(values[0]);
      setDocuments(values[1]);
    })
  }, []);

  const handleSelectOption = optionSelected => {
    console.log(optionSelected);
  };

  return (
       <HomeStyled>
        <div className="home__header">
          <div>Nuevo documento</div>
          <Selector
            options={documentTypes}
            title="Tipos de documentos"
            onToogleOption={handleSelectOption}
          />
        </div>

        <div className="cards-grid">
          {documents &&
            documents.map((document) => {
              return <Card key={document.id} document={document} />;
            })}
        </div>
      </HomeStyled>
   );
};
