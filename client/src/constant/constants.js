export const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337/api' : 'https://yourdeployment.com/api';
export const LOCAL_STORAGE_TOKEN_NAME = 'token';     
import axios from 'axios';       
const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      'Access-Control-Allow-Origin': '*' ,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "preflightContinue": "false",
      'Content-Type': 'application/json',
    }
  });
export default axiosInstance; 