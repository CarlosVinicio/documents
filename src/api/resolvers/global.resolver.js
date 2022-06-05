import axios from "axios";
import { documentTypes } from "../../utils/constants/global.constant";
import { getDocumentsUrl } from "../../utils/helpers/globa.helper";
import { API, BASE_URL } from "../index";

export const fetchAllDocumentTypes = async () => {
  const response = await axios.get(`${BASE_URL}/${API.documentTypes}`);
  return response.data;
};

export const fetchAllDocuments = async (
  limit,
  page,
  documentType = documentTypes.All
) => {
  const queryUrl = getDocumentsUrl(limit, page, documentType);
  const response = await axios.get(`${BASE_URL}/${API.documents}${queryUrl}`);
  return response;
};

export const fetchCreateNewDocument = async (body) => {
  const response = await axios.post(`${BASE_URL}/${API.documents}`, body);
  return response.data;
};

export const fetchDeleteDocument = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${API.documents}/${id}`);
  return response.data;
};

export const fetchDocumentDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/${API.documents}/${id}`);
  return response.data;
};
