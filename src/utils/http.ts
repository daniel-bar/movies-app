import axios from 'axios';

export const backendAPIAxios = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
});