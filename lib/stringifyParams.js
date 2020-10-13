"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stringifyParams;

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function stringifyParams(params) {
  return _qs["default"].stringify(params, {
    arrayFormat: 'brackets'
  });
}