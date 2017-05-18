'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .CalendarMonth {\n    text-align: center;\n    padding: 0 13px;\n    vertical-align: top;\n\n    &:first-of-type {\n      position: absolute;\n      z-index: -1;\n      opacity: 0;\n      pointer-events: none;\n    }\n\n    table {\n      border-collapse: collapse;\n      border-spacing: 0;\n      caption: {\n        caption-side: initial;\n      }\n    }\n\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .CalendarMonth--horizontal {\n    display: inline-block;\n    min-height: 100%;\n  }\n\n  .CalendarMonth--vertical {\n    display: block;\n  }\n\n  .CalendarMonth__caption {\n    color: ', ';\n    font-size: 16px;\n    letter-spacing: -.21px;\n    text-align: center;\n    text-transform: capitalize;\n\n    margin: 0;\n    padding: 22px 0 54px;\n\n    // necessary to not hide borders in FF\n    // margin-bottom: 2px;\n    caption-side: initial;\n\n  }\n\n  .CalendarMonth--vertical-scrollable .CalendarMonth__caption {\n    padding: 5px 0;\n  }\n'], ['\n  .CalendarMonth {\n    text-align: center;\n    padding: 0 13px;\n    vertical-align: top;\n\n    &:first-of-type {\n      position: absolute;\n      z-index: -1;\n      opacity: 0;\n      pointer-events: none;\n    }\n\n    table {\n      border-collapse: collapse;\n      border-spacing: 0;\n      caption: {\n        caption-side: initial;\n      }\n    }\n\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .CalendarMonth--horizontal {\n    display: inline-block;\n    min-height: 100%;\n  }\n\n  .CalendarMonth--vertical {\n    display: block;\n  }\n\n  .CalendarMonth__caption {\n    color: ', ';\n    font-size: 16px;\n    letter-spacing: -.21px;\n    text-align: center;\n    text-transform: capitalize;\n\n    margin: 0;\n    padding: 22px 0 54px;\n\n    // necessary to not hide borders in FF\n    // margin-bottom: 2px;\n    caption-side: initial;\n\n  }\n\n  .CalendarMonth--vertical-scrollable .CalendarMonth__caption {\n    padding: 5px 0;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _styledComponents.css)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.color.textDarkest;
});