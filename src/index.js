import axios from 'axios';
import humps from 'humps';
import toJS from './toJS';
import stringifyParams from './stringifyParams';

export decamelizeOrderingParam from './decamelizeOrderingParam';

let {
  transformRequest,
  transformResponse,
} = axios.defaults;

transformRequest = [
  toJS,
  humps.decamelizeKeys,
  ...transformRequest,
];

transformResponse = [
  ...transformResponse,
  humps.camelizeKeys,
];

export const transformParamsFunctions = [
  humps.decamelizeKeys,
  stringifyParams,
];

export const apiClient = axios.create({
  transformRequest,
  transformResponse,
  paramsSerializer,
});

export function paramsSerializer(params) {
  return transformParamsFunctions.reduce((transformedParams, transformParamsFn) => transformParamsFn(transformedParams), params);
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

export function addTransformParamsFn(fn) {
  transformParamsFunctions.unshift(fn);
}

export default apiClient;
