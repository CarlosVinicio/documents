import axios from 'axios';
import { BASE_URL } from '../index';

export const fetchAllDocumentTypes = async () => {  
  const response = await axios.get(`${BASE_URL}/documentTypes`);
  return response.data;  
}