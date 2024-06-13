export const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337/api' : 'https://wealthy-horn-134d2e87af.strapiapp.com/api';
export const imgUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337' : 'https://wealthy-horn-134d2e87af.strapiapp.com';
export const LOCAL_STORAGE_TOKEN_NAME = 'token';     
import axios from 'axios';       
const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*' ,
    }
  });
export default axiosInstance; 