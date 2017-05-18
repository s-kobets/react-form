'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .CalendarMonthGrid {\n    background: #fff;\n    z-index: 0;\n    text-align: left;\n  }\n\n  .CalendarMonthGrid--animating {\n    transition: transform 0.2s ease-in-out;\n    z-index: 1;\n  }\n\n  .CalendarMonthGrid--horizontal {\n    position: absolute;\n    left: 9px;\n    width: ', 'px;\n  }\n\n  .CalendarMonthGrid--vertical {\n    width: ', 'px;\n    margin: 0 auto;\n  }\n\n  .CalendarMonthGrid--vertical-scrollable {\n    width: ', 'px;\n    margin: 0 auto;\n    overflow-y: scroll;\n  }\n'], ['\n  .CalendarMonthGrid {\n    background: #fff;\n    z-index: 0;\n    text-align: left;\n  }\n\n  .CalendarMonthGrid--animating {\n    transition: transform 0.2s ease-in-out;\n    z-index: 1;\n  }\n\n  .CalendarMonthGrid--horizontal {\n    position: absolute;\n    left: 9px;\n    width: ', 'px;\n  }\n\n  .CalendarMonthGrid--vertical {\n    width: ', 'px;\n    margin: 0 auto;\n  }\n\n  .CalendarMonthGrid--vertical-scrollable {\n    width: ', 'px;\n    margin: 0 auto;\n    overflow-y: scroll;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _styledComponents.css)(_templateObject, function (_ref) {
  var dimensions = _ref.dimensions;
  return 4 * dimensions.dayPickerWidth;
}, function (_ref2) {
  var dimensions = _ref2.dimensions;
  return dimensions.dayPickerWidth;
}, function (_ref3) {
  var dimensions = _ref3.dimensions;
  return dimensions.dayPickerWidth;
});