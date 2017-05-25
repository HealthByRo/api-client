'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringifyParams;

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _humps = require('humps');

var _humps2 = _interopRequireDefault(_humps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringifyParams(params) {
  console.log('stringifyParams', params);
  return _qs2.default.stringify(params, { arrayFormat: 'brackets' });
}