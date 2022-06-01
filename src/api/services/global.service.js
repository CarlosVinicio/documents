import { fetchAllDocumentTypes } from "../resolvers/global.resolver";

export const getDocumentTypes = () => {
  return fetchAllDocumentTypes()
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};