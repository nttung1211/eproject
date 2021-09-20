import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../App';
import CONFIG from '../constants/config';
import PATH from '../constants/path';
import { pathMatch } from '../utils/helpers';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const publicEndpoints = [
  '/auth/login...',
];

axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    if (!pathMatch(config.url!, publicEndpoints)) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(CONFIG.storedTokenName)}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    const { data } = error.response;
    console.error(data.errorMessage || data.error);
    const errorMessage = data.errorMessage || "An unhandled error has occured";
    const status = error.response.status;
    if (status === 403) {
      history.push(PATH.signOut);
    } else {
      toast.error(errorMessage);
    }
    return Promise.reject({
      status,
      errorMessage,
    });
  }
);

export default axiosInstance;
