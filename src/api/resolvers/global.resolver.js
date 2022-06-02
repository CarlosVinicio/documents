import axios from 'axios';
import { API, BASE_URL } from '../index';

export const fetchAllDocumentTypes = async () => {  
  const response = await axios.get(`${BASE_URL}/${API.documentTypes}`);
  return response.data;  
}

export const fetchAllDocuments = async () => {  
  const response = await axios.get(`${BASE_URL}/${API.documents}`);
  return response.data;  
}