'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .DateRangePickerInput {\n    background-color: ', ';\n    display: inline-block;\n  }\n\n  // We don\'t use disabled state\n  // .DateRangePickerInput--disabled {}\n\n  .DateRangePickerInput__arrow {\n    display: none;\n  }\n\n  .DateRangePickerInput__arrow svg {\n    vertical-align: middle;\n    fill: ', ';\n    height: 24px;\n    width: 24px;\n  }\n\n  // We don\'t use \'clear\' bitton\n  // .DateRangePickerInput__clear-dates {\n  //   svg {}\n  // }\n  //\n  // .DateRangePickerInput__clear-dates--hide {}\n  //\n  // .DateRangePickerInput__clear-dates:focus,\n  // .DateRangePickerInput__clear-dates--hover {}\n\n  // We don\'t use calendar icons\n  // .DateRangePickerInput__calendar-icon {\n  //   svg {}\n  // }\n'], ['\n  .DateRangePickerInput {\n    background-color: ', ';\n    display: inline-block;\n  }\n\n  // We don\'t use disabled state\n  // .DateRangePickerInput--disabled {}\n\n  .DateRangePickerInput__arrow {\n    display: none;\n  }\n\n  .DateRangePickerInput__arrow svg {\n    vertical-align: middle;\n    fill: ', ';\n    height: 24px;\n    width: 24px;\n  }\n\n  // We don\'t use \'clear\' bitton\n  // .DateRangePickerInput__clear-dates {\n  //   svg {}\n  // }\n  //\n  // .DateRangePickerInput__clear-dates--hide {}\n  //\n  // .DateRangePickerInput__clear-dates:focus,\n  // .DateRangePickerInput__clear-dates--hover {}\n\n  // We don\'t use calendar icons\n  // .DateRangePickerInput__calendar-icon {\n  //   svg {}\n  // }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _styledComponents.css)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.color.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.primary;
});