import React, { useEffect, useState } from "react";
import { getDocumentTypes } from "../../api/services/global.service";
import { Selector } from "../../components/selector/Selector.component";

export const Home = () => {
  const [documentTypes, setDocumentTypes] = useState([]);



  const [filter, setFilter] = useState();

  useEffect(() => {
    // documentTypes
    getDocumentTypes()
      .then((response) => {
        setDocumentTypes(response);
      })
  }, [])
  

  const handleSelectOption = (optionSelected) => {
    console.log(optionSelected);
    
  }

  return (
    <div>
      <div style={{ padding: "30px" }}>
        <Selector 
          options={documentTypes} 
          title="Tipos de documentos" 
          onToogleOption={handleSelectOption}
        />
      </div>
    </div>
  );
};
