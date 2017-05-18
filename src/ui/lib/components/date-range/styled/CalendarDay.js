'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .CalendarDay {\n    background: ', ';\n\n    color: ', ';\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: -.21px;\n    text-align: center;\n    cursor: pointer;\n\n    padding: 2px 0 0;\n    box-sizing: border-box;\n    width: 42px;\n    height: 36px;\n  }\n\n  .DateInput--startDate--focused .CalendarDay:hover,\n  .DateInput--endDate--focused .CalendarDay.CalendarDay--beforeStart:hover,\n  .CalendarDay--selected-start {\n    border-radius: 4px 0 0 4px;\n  }\n\n  .DateInput--endDate--focused .CalendarDay:hover,\n  .CalendarDay--selected-end {\n    border-radius: 0 4px 4px 0;\n  }\n\n  .DateInput--endDate--focused .CalendarDay.CalendarDay--selected-start:hover,\n  .CalendarDay.CalendarDay--selected-start.CalendarDay--selected-end {\n    border-radius: 4px;\n  }\n\n  .DateInput--startDate--focused .CalendarDay,\n  .DateInput--endDate--focused .CalendarDay.CalendarDay--beforeStart:hover {\n    &:not(.CalendarDay--blocked):not(.CalendarDay--selected-end):hover {\n      position: relative;\n\n      ', '\n    }\n  }\n\n  .DateInput--endDate--focused .CalendarDay {\n    &:not(.CalendarDay--blocked):not(.CalendarDay--selected-start):hover {\n      position: relative;\n\n      ', '\n    }\n  }\n\n  .CalendarDay--selected-start,\n  .CalendarDay--selected-end,\n  .CalendarDay--selected {\n    background: ', ';\n    color: ', ';\n\n    &:active {\n      background: ', ';\n    }\n  }\n\n  .CalendarDay--selected-span {\n    background: ', ';\n    color: ', ';\n  }\n\n  .CalendarDay:not(.CalendarDay--blocked):hover {\n    background: ', ';\n    color: ', ';\n  }\n\n  .CalendarDay--blocked,\n  .CalendarDay--blocked-calendar,\n  .CalendarDay--blocked-out-of-range {\n    background: ', ';\n    color: ', ';\n    cursor: default;\n  }\n\n  // TODO check style guide\n  // .CalendarDay--hovered-span,\n  // .CalendarDay--after-hovered-start {}\n\n  // Currently we dont use highlighted days\n  // .CalendarDay--highlighted-calendar {\n  //   &:active {}\n  // }\n\n  // Currently we dont use outside days (I dont understand what is it)\n  // .CalendarDay--outside {\n  //   &:active {}\n  // }\n\n  // Currently we dont use "minimum nights"\n  // .CalendarDay--blocked-minimum-nights {\n  //   &:active {}\n  // }\n'], ['\n  .CalendarDay {\n    background: ', ';\n\n    color: ', ';\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: -.21px;\n    text-align: center;\n    cursor: pointer;\n\n    padding: 2px 0 0;\n    box-sizing: border-box;\n    width: 42px;\n    height: 36px;\n  }\n\n  .DateInput--startDate--focused .CalendarDay:hover,\n  .DateInput--endDate--focused .CalendarDay.CalendarDay--beforeStart:hover,\n  .CalendarDay--selected-start {\n    border-radius: 4px 0 0 4px;\n  }\n\n  .DateInput--endDate--focused .CalendarDay:hover,\n  .CalendarDay--selected-end {\n    border-radius: 0 4px 4px 0;\n  }\n\n  .DateInput--endDate--focused .CalendarDay.CalendarDay--selected-start:hover,\n  .CalendarDay.CalendarDay--selected-start.CalendarDay--selected-end {\n    border-radius: 4px;\n  }\n\n  .DateInput--startDate--focused .CalendarDay,\n  .DateInput--endDate--focused .CalendarDay.CalendarDay--beforeStart:hover {\n    &:not(.CalendarDay--blocked):not(.CalendarDay--selected-end):hover {\n      position: relative;\n\n      ', '\n    }\n  }\n\n  .DateInput--endDate--focused .CalendarDay {\n    &:not(.CalendarDay--blocked):not(.CalendarDay--selected-start):hover {\n      position: relative;\n\n      ', '\n    }\n  }\n\n  .CalendarDay--selected-start,\n  .CalendarDay--selected-end,\n  .CalendarDay--selected {\n    background: ', ';\n    color: ', ';\n\n    &:active {\n      background: ', ';\n    }\n  }\n\n  .CalendarDay--selected-span {\n    background: ', ';\n    color: ', ';\n  }\n\n  .CalendarDay:not(.CalendarDay--blocked):hover {\n    background: ', ';\n    color: ', ';\n  }\n\n  .CalendarDay--blocked,\n  .CalendarDay--blocked-calendar,\n  .CalendarDay--blocked-out-of-range {\n    background: ', ';\n    color: ', ';\n    cursor: default;\n  }\n\n  // TODO check style guide\n  // .CalendarDay--hovered-span,\n  // .CalendarDay--after-hovered-start {}\n\n  // Currently we dont use highlighted days\n  // .CalendarDay--highlighted-calendar {\n  //   &:active {}\n  // }\n\n  // Currently we dont use outside days (I dont understand what is it)\n  // .CalendarDay--outside {\n  //   &:active {}\n  // }\n\n  // Currently we dont use "minimum nights"\n  // .CalendarDay--blocked-minimum-nights {\n  //   &:active {}\n  // }\n']);

var _styledComponents = require('styled-components');

var _cssArrow = require('../../../utils/css-arrow');

var _cssArrow2 = _interopRequireDefault(_cssArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _styledComponents.css)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.color.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.textDarkest;
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _cssArrow2.default)({
    width: 4,
    heigth: 12,
    color: theme.color.primary,
    fromDirection: 'left'
  });
}, function (_ref4) {
  var theme = _ref4.theme;
  return (0, _cssArrow2.default)({
    width: 4,
    heigth: 12,
    color: theme.color.primary,
    fromDirection: 'right'
  });
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.misc;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.background;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.misc;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.miscLightest;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.textDarkest;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.primary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.background;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.color.background;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.color.textLight;
});