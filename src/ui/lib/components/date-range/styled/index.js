'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CalendarDay = require('./CalendarDay');

var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

var _CalendarMonth = require('./CalendarMonth');

var _CalendarMonth2 = _interopRequireDefault(_CalendarMonth);

var _CalendarMonthGrid = require('./CalendarMonthGrid');

var _CalendarMonthGrid2 = _interopRequireDefault(_CalendarMonthGrid);

var _DayPickerNavigation = require('./DayPickerNavigation');

var _DayPickerNavigation2 = _interopRequireDefault(_DayPickerNavigation);

var _DateInput = require('./DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _DateRangePicker = require('./DateRangePicker');

var _DateRangePicker2 = _interopRequireDefault(_DateRangePicker);

var _DateRangePickerInput = require('./DateRangePickerInput');

var _DateRangePickerInput2 = _interopRequireDefault(_DateRangePickerInput);

var _DayPicker = require('./DayPicker');

var _DayPicker2 = _interopRequireDefault(_DayPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, _CalendarDay2.default, _CalendarMonth2.default, _CalendarMonthGrid2.default, _DayPickerNavigation2.default, _DateInput2.default, _DateRangePicker2.default, _DateRangePickerInput2.default, _DayPicker2.default);