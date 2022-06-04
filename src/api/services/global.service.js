import { fetchAllDocuments, fetchAllDocumentTypes, fetchCreateNewDocument, fetchDeleteDocument } from "../resolvers/global.resolver";

export const getDocumentTypes = () => {
  return fetchAllDocumentTypes()
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getAllDocuments = (limit, page, documentType) => {
  return fetchAllDocuments(limit, page, documentType)
    .then((response) => {
      const { data, headers } = response;
      return {data, totalDocuments : headers["x-total-count"] };
    })
    .catch((error) => {
      throw error;
    });
};

export const createNewDocument = (form) => {
  return fetchCreateNewDocument(form)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteDocument = (id) => {
  return fetchDeleteDocument(id)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};