'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvgCost = exports.Day = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 11px;\n  color: ', ';\n  letter-spacing: .5px;\n  line-height: 1;\n  text-align: center;\n\n  .CalendarDay:not(.CalendarDay--blocked):hover &,\n  .CalendarDay--selected-start &,\n  .CalendarDay--selected-end & {\n    color: ', '\n  }\n'], ['\n  font-size: 11px;\n  color: ', ';\n  letter-spacing: .5px;\n  line-height: 1;\n  text-align: center;\n\n  .CalendarDay:not(.CalendarDay--blocked):hover &,\n  .CalendarDay--selected-start &,\n  .CalendarDay--selected-end & {\n    color: ', '\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Day = exports.Day = _styledComponents2.default.span(_templateObject);

var AvgCost = exports.AvgCost = _styledComponents2.default.div(_templateObject2, function (_ref) {
  var isCheap = _ref.isCheap,
      theme = _ref.theme;
  return isCheap ? theme.color.success : theme.color.textLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.background;
});