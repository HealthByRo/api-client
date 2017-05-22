'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toJS = toJS;
exports.setHeaders = setHeaders;
exports.setBaseUrl = setBaseUrl;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _humps = require('humps');

var _humps2 = _interopRequireDefault(_humps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _axios$defaults = _axios2.default.defaults,
    transformRequest = _axios$defaults.transformRequest,
    transformResponse = _axios$defaults.transformResponse;


var apiClient = _axios2.default.create({
  transformRequest: [toJS, _humps2.default.decamelizeKeys].concat(transformRequest),
  transformResponse: transformResponse.concat(_humps2.default.camelizeKeys)
});

function toJS(map) {
  if ((typeof map === 'undefined' ? 'undefined' : _typeof(map)) === 'object' && typeof map.toJS === 'function') {
    return map.toJS();
  }
  return map;
}

function setHeaders(headers) {
  apiClient.defaults.headers = _extends({}, apiClient.defaults.headers, headers);
}

function setBaseUrl(baseURL) {
  apiClient.defaults.baseURL = baseURL;
}

exports.default = apiClient;