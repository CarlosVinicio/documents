import axios from 'axios';
import { documentTypes } from '../../utils/constants/global.constant';
import { getDocumentsUrl } from '../../utils/helpers/globa.helper';
import { API, BASE_URL } from '../index';

export const fetchAllDocumentTypes = async () => {  
  const response = await axios.get(`${BASE_URL}/${API.documentTypes}`);
  return response.data;  
}

export const fetchAllDocuments = async (limit, page, documentType = documentTypes.All) => {  
  const queryUrl = getDocumentsUrl(limit, page, documentType);
  const response = await axios.get(`${BASE_URL}/${API.documents}${queryUrl}`);
  return response;  
}