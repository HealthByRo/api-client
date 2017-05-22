import axios from 'axios';
import humps from 'humps';

const {
  transformRequest,
  transformResponse,
} = axios.defaults;

const apiClient = axios.create({
  transformRequest: [toJS, humps.decamelizeKeys].concat(transformRequest),
  transformResponse: transformResponse.concat(humps.camelizeKeys),
});

export function toJS(map) {
  if (typeof map === 'object' && typeof map.toJS === 'function') {
    return map.toJS();
  }
  return map;
}

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
