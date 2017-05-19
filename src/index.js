import * as axios from 'axios';

const apiClient = axios.create({});

export function setHeaders(headers) {
  apiClient.defaults.headers = {
    ...apiClient.defaults.headers,
    ...headers,
  };
}

export function setBaseUrl(baseURL) {
  apiClient.defaults.baseURL = baseURL;
}

export default apiClient;
