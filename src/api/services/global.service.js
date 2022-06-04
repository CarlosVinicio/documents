import { fetchAllDocuments, fetchAllDocumentTypes } from "../resolvers/global.resolver";

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