'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toJS;
function toJS(map) {
  if ((typeof map === 'undefined' ? 'undefined' : _typeof(map)) === 'object' && typeof map.toJS === 'function') {
    return map.toJS();
  }
  return map;
}