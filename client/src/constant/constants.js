export const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337/api' : 'https://yourdeployment.com/api';
export const imgUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337' : 'https://yourdeployment.com';
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