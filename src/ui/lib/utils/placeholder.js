'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    &::placeholder {\n      ', '\n    }\n\n    &::-webkit-input-placeholder {\n      ', '\n    }\n\n    ::-moz-placeholder {\n      ', '\n    }\n\n    :-ms-input-placeholder {\n      ', '\n    }\n  '], ['\n    &::placeholder {\n      ', '\n    }\n\n    &::-webkit-input-placeholder {\n      ', '\n    }\n\n    ::-moz-placeholder {\n      ', '\n    }\n\n    :-ms-input-placeholder {\n      ', '\n    }\n  ']);

exports.default = placeholder;

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function placeholder() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var styles = _styledComponents.css.apply(null, args);

  return (0, _styledComponents.css)(_templateObject, styles, styles, styles, styles);
}