'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .DayPicker {\n    background: ', ';\n    position: relative;\n    text-align: left;\n  }\n\n  .DayPicker--horizontal {\n    box-shadow: 0 3px 7px 0 ', ';\n    border-radius: 3px;\n\n    // TODO get rid of portals\n    // &.DayPicker--portal {}\n  }\n\n  // .DayPicker--vertical.DayPicker--portal {}\n\n  .DayPicker__week-headers {\n    position: relative;\n  }\n\n  .DayPicker--horizontal .DayPicker__week-headers {\n    margin-left: 9px;\n  }\n\n  .DayPicker__week-header {\n    color: ', ';\n    position: absolute;\n    width: ', 'px;\n    top: 60px;\n    z-index: 2;\n    padding: 0 13px;\n    text-align: left;\n\n    ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n    }\n\n    li {\n      display: inline-block;\n      width: 42px;\n      height: 36px;\n      padding-top: 2px;\n\n      font-size: 16px;\n      line-height: 20px;\n      letter-spacing: -.21px;\n      text-align: center;\n    }\n  }\n\n  .DayPicker--vertical .DayPicker__week-header {\n    margin-left: ', 'px;\n    left: 50%;\n  }\n\n  .DayPicker--vertical-scrollable {\n    height: 100%;\n\n    .DayPicker__week-header {\n      top: 0;\n      display: table-row;\n      background: white;\n    }\n\n    .transition-container--vertical {\n      padding-top: 20px;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      overflow-y: scroll;\n    }\n\n    .DayPicker__week-header {\n      margin-left: 0;\n      left: 0;\n      width: 100%;\n      text-align: center;\n    }\n  }\n\n  .transition-container {\n    position: relative;\n    overflow: hidden;\n    border-radius: 3px;\n  }\n\n  .transition-container--horizontal {\n    transition: height 0.2s ease-in-out;\n  }\n\n  .transition-container--vertical {\n    width: 100%;\n  }\n'], ['\n  .DayPicker {\n    background: ', ';\n    position: relative;\n    text-align: left;\n  }\n\n  .DayPicker--horizontal {\n    box-shadow: 0 3px 7px 0 ', ';\n    border-radius: 3px;\n\n    // TODO get rid of portals\n    // &.DayPicker--portal {}\n  }\n\n  // .DayPicker--vertical.DayPicker--portal {}\n\n  .DayPicker__week-headers {\n    position: relative;\n  }\n\n  .DayPicker--horizontal .DayPicker__week-headers {\n    margin-left: 9px;\n  }\n\n  .DayPicker__week-header {\n    color: ', ';\n    position: absolute;\n    width: ', 'px;\n    top: 60px;\n    z-index: 2;\n    padding: 0 13px;\n    text-align: left;\n\n    ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n    }\n\n    li {\n      display: inline-block;\n      width: 42px;\n      height: 36px;\n      padding-top: 2px;\n\n      font-size: 16px;\n      line-height: 20px;\n      letter-spacing: -.21px;\n      text-align: center;\n    }\n  }\n\n  .DayPicker--vertical .DayPicker__week-header {\n    margin-left: ', 'px;\n    left: 50%;\n  }\n\n  .DayPicker--vertical-scrollable {\n    height: 100%;\n\n    .DayPicker__week-header {\n      top: 0;\n      display: table-row;\n      background: white;\n    }\n\n    .transition-container--vertical {\n      padding-top: 20px;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      overflow-y: scroll;\n    }\n\n    .DayPicker__week-header {\n      margin-left: 0;\n      left: 0;\n      width: 100%;\n      text-align: center;\n    }\n  }\n\n  .transition-container {\n    position: relative;\n    overflow: hidden;\n    border-radius: 3px;\n  }\n\n  .transition-container--horizontal {\n    transition: height 0.2s ease-in-out;\n  }\n\n  .transition-container--vertical {\n    width: 100%;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _styledComponents.css)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.color.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.miscDarkest;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.textLight;
}, function (_ref4) {
  var dimensions = _ref4.dimensions;
  return dimensions.dayPickerWidth;
}, function (_ref5) {
  var dimensions = _ref5.dimensions;
  return -1 * dimensions.dayPickerWidth / 2;
});