'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .DateInput {\n    margin: 0;\n\n    position: relative;\n    display: inline-block;\n    width: ', 'px;\n    vertical-align: middle;\n\n    .screen-reader-only {\n      border: 0;\n      clip: rect(0, 0, 0, 0);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      width: 1px;\n    }\n  }\n\n  .DateInput--with-caret::before,\n  .DateInput--with-caret::after {\n    content: "";\n    display: inline-block;\n    position: absolute;\n    bottom: auto;\n    border: 10px solid transparent;\n    border-top: 0;\n    left: 22px;\n    z-index: 2;\n  }\n\n  // We dont use caret\n  // .DateInput--with-caret::before {}\n  //\n  // .DateInput--with-caret::after {}\n\n  // Are this state pertinently?\n  // .DateInput--disabled {}\n\n  .DateInput__input {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 0;\n    height: 100%;\n    width: 100%;\n\n    // Anymore overlays inputs text blocks\n    z-index: 10;\n\n    &[readonly] {\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n    }\n  }\n\n  // Placeholder state\n  .DateInput__display-text {\n    color: ', ';\n    font-size: 18px;\n    line-height: 22px;\n    letter-spacing: -.11px;\n    white-space: nowrap;\n\n    padding: 10px 18px 11px 10px;\n    border: 2px solid ', ';\n    border-radius:100px 0 0 100px;\n    overflow: hidden;\n\n    // Input borders overlaying\n    position: relative;\n    margin-right: -2px;\n    z-index: 1;\n  }\n\n  .DateInput ~ .DateInput .DateInput__display-text {\n    border-radius:0 100px 100px 0;\n    margin-right: 0;\n  }\n\n  .DateInput__display-text--has-input {\n    color: ', ';\n  }\n\n  .DateInput--startDate--placeholder #startDate ~ .DateInput__display-text,\n  .DateInput--endDate--placeholder #endDate ~ .DateInput__display-text {\n    color: ', ';\n  }\n\n  .DateInput__display-text--focused {\n    border-color: ', ';\n    z-index: 2;\n  }\n'], ['\n  .DateInput {\n    margin: 0;\n\n    position: relative;\n    display: inline-block;\n    width: ', 'px;\n    vertical-align: middle;\n\n    .screen-reader-only {\n      border: 0;\n      clip: rect(0, 0, 0, 0);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      width: 1px;\n    }\n  }\n\n  .DateInput--with-caret::before,\n  .DateInput--with-caret::after {\n    content: "";\n    display: inline-block;\n    position: absolute;\n    bottom: auto;\n    border: 10px solid transparent;\n    border-top: 0;\n    left: 22px;\n    z-index: 2;\n  }\n\n  // We dont use caret\n  // .DateInput--with-caret::before {}\n  //\n  // .DateInput--with-caret::after {}\n\n  // Are this state pertinently?\n  // .DateInput--disabled {}\n\n  .DateInput__input {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 0;\n    height: 100%;\n    width: 100%;\n\n    // Anymore overlays inputs text blocks\n    z-index: 10;\n\n    &[readonly] {\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n    }\n  }\n\n  // Placeholder state\n  .DateInput__display-text {\n    color: ', ';\n    font-size: 18px;\n    line-height: 22px;\n    letter-spacing: -.11px;\n    white-space: nowrap;\n\n    padding: 10px 18px 11px 10px;\n    border: 2px solid ', ';\n    border-radius:100px 0 0 100px;\n    overflow: hidden;\n\n    // Input borders overlaying\n    position: relative;\n    margin-right: -2px;\n    z-index: 1;\n  }\n\n  .DateInput ~ .DateInput .DateInput__display-text {\n    border-radius:0 100px 100px 0;\n    margin-right: 0;\n  }\n\n  .DateInput__display-text--has-input {\n    color: ', ';\n  }\n\n  .DateInput--startDate--placeholder #startDate ~ .DateInput__display-text,\n  .DateInput--endDate--placeholder #endDate ~ .DateInput__display-text {\n    color: ', ';\n  }\n\n  .DateInput__display-text--focused {\n    border-color: ', ';\n    z-index: 2;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// $caretTop: 62px

exports.default = (0, _styledComponents.css)(_templateObject, function (_ref) {
  var dimensions = _ref.dimensions;
  return dimensions.inputWidth;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.miscDark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.primaryLight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.textDarker;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.miscDark;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.secondary;
});