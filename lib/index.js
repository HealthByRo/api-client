'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiClient = exports.transformParamsFunctions = exports.decamelizeOrderingParam = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.paramsSerializer = paramsSerializer;
exports.setHeaders = setHeaders;
exports.setBaseUrl = setBaseUrl;
exports.addTransformParamsFn = addTransformParamsFn;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _humps = require('humps');

var _humps2 = _interopRequireDefault(_humps);

var _toJS = require('./toJS');

var _toJS2 = _interopRequireDefault(_toJS);

var _stringifyParams = require('./stringifyParams');

var _stringifyParams2 = _interopRequireDefault(_stringifyParams);

var _decamelizeOrderingParam2 = require('./decamelizeOrderingParam');

var _decamelizeOrderingParam3 = _interopRequireDefault(_decamelizeOrderingParam2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.decamelizeOrderingParam = _decamelizeOrderingParam3.default;
var _axios$defaults = _axios2.default.defaults,
    transformRequest = _axios$defaults.transformRequest,
    transformResponse = _axios$defaults.transformResponse;


transformRequest = [_toJS2.default, _humps2.default.decamelizeKeys].concat(_toConsumableArray(transformRequest));

transformResponse = [].concat(_toConsumableArray(transformResponse), [_humps2.default.camelizeKeys]);

var transformParamsFunctions = exports.transformParamsFunctions = [_humps2.default.decamelizeKeys, _stringifyParams2.default];

var apiClient = exports.apiClient = _axios2.default.create({
  transformRequest: transformRequest,
  transformResponse: transformResponse,
  paramsSerializer: paramsSerializer
});

function paramsSerializer(params) {
  return transformParamsFunctions.reduce(function (transformedParams, transformParamsFn) {
    return transformParamsFn(transformedParams);
  }, params);
}

function setHeaders(headers) {
  apiClient.defaults.headers = _extends({}, apiClient.defaults.headers, headers);
}

function setBaseUrl(baseURL) {
  apiClient.defaults.baseURL = baseURL;
}

function addTransformParamsFn(fn) {
  transformParamsFunctions.unshift(fn);
}

exports.default = apiClient;