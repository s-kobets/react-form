'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .DateRangePicker {\n    position: relative;\n    display: inline-block;\n  }\n\n  .DateRangePicker__picker {\n    z-index: 1;\n    background: ', ';\n    position: absolute;\n    top: 49px;\n  }\n\n  .DateRangePicker__picker--direction-left {\n      left: 0;\n  }\n\n  .DateRangePicker__picker--direction-right {\n      right: 0;\n  }\n\n  // TODO drop portal picker\n  // .DateRangePicker__picker--portal {}\n  //\n  // .DateRangePicker__picker--full-screen-portal {\n  //   background-color: ', ';\n  // }\n  //\n  // .DateRangePicker__close {\n  //   svg {}\n  //\n  //   &:hover,\n  //   &:focus {}\n  // }\n'], ['\n  .DateRangePicker {\n    position: relative;\n    display: inline-block;\n  }\n\n  .DateRangePicker__picker {\n    z-index: 1;\n    background: ', ';\n    position: absolute;\n    top: 49px;\n  }\n\n  .DateRangePicker__picker--direction-left {\n      left: 0;\n  }\n\n  .DateRangePicker__picker--direction-right {\n      right: 0;\n  }\n\n  // TODO drop portal picker\n  // .DateRangePicker__picker--portal {}\n  //\n  // .DateRangePicker__picker--full-screen-portal {\n  //   background-color: ', ';\n  // }\n  //\n  // .DateRangePicker__close {\n  //   svg {}\n  //\n  //   &:hover,\n  //   &:focus {}\n  // }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _styledComponents.css)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.color.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.background;
});