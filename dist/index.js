'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setHeaders = setHeaders;
exports.setBaseUrl = setBaseUrl;

var _axios = require('axios');

var axios = _interopRequireWildcard(_axios);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var apiClient = axios.create({});

function setHeaders(headers) {
  apiClient.defaults.headers = _extends({}, apiClient.defaults.headers, headers);
}

function setBaseUrl(baseURL) {
  apiClient.defaults.baseURL = baseURL;
}

exports.default = apiClient;