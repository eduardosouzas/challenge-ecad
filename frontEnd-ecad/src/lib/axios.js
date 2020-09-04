import axios from 'axios';
import Config from '../config/environments';

const baseURL = Config.END_POINT;

const baseRequest = {
  baseURL,
  withCredentials: true,
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(baseRequest);

export default axiosInstance;
