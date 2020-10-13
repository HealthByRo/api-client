"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toJS;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function toJS(map) {
  if (_typeof(map) === 'object' && typeof map.toJS === 'function') {
    return map.toJS();
  }

  return map;
}