"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paramsSerializer = paramsSerializer;
exports.setHeaders = setHeaders;
exports.setBaseUrl = setBaseUrl;
exports.addTransformParamsFn = addTransformParamsFn;
Object.defineProperty(exports, "decamelizeOrderingParam", {
  enumerable: true,
  get: function get() {
    return _decamelizeOrderingParam2["default"];
  }
});
exports["default"] = exports.transformParamsFunctions = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _humps = _interopRequireDefault(require("humps"));

var _toJS = _interopRequireDefault(require("./toJS"));

var _stringifyParams = _interopRequireDefault(require("./stringifyParams"));

var _decamelizeOrderingParam2 = _interopRequireDefault(require("./decamelizeOrderingParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _axios$defaults = _axios["default"].defaults,
    transformRequest = _axios$defaults.transformRequest,
    transformResponse = _axios$defaults.transformResponse;
transformRequest = [_toJS["default"], _humps["default"].decamelizeKeys].concat(_toConsumableArray(transformRequest));
transformResponse = [].concat(_toConsumableArray(transformResponse), [_humps["default"].camelizeKeys]);
var transformParamsFunctions = [_humps["default"].decamelizeKeys, _stringifyParams["default"]];
exports.transformParamsFunctions = transformParamsFunctions;

var apiClient = _axios["default"].create({
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
  apiClient.defaults.headers = _objectSpread(_objectSpread({}, apiClient.defaults.headers), headers);
}

function setBaseUrl(baseURL) {
  apiClient.defaults.baseURL = baseURL;
}

function addTransformParamsFn(fn) {
  transformParamsFunctions.unshift(fn);
}

var _default = apiClient;
exports["default"] = _default;