'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountControls = exports.PassangerCount = exports.CountControl = exports.Current = exports.Description = exports.Title = exports.Passenger = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  width: 100%;\n  min-width: 216px;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n'], ['\n  display: flex;\n  width: 100%;\n  min-width: 216px;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0;\n  font-size: 16px;\n  line-height: 20px;\n  color: ', ';\n'], ['\n  margin: 0;\n  font-size: 16px;\n  line-height: 20px;\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: 0;\n  font-size: 11px;\n  line-height: 16px;\n  color: ', ';\n'], ['\n  margin: 0;\n  font-size: 11px;\n  line-height: 16px;\n  color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin-right: 6px;\n  font-size: 24px;\n  line-height: 28px;\n  color: ', ';\n'], ['\n  margin-right: 6px;\n  font-size: 24px;\n  line-height: 28px;\n  color: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-flex;\n  margin-left: 6px;\n  border-radius: 50%;\n  background-color: ', ';\n\n  &.control-max {\n    opacity: ', ';\n    cursor: ', ';\n\n    &:hover button {\n      box-shadow: ', '\n    }\n  }\n\n  &.control-min {\n    opacity: ', ';\n    cursor: ', ';\n\n    &:hover button {\n      box-shadow: ', '\n    }\n  }\n'], ['\n  position: relative;\n  display: inline-flex;\n  margin-left: 6px;\n  border-radius: 50%;\n  background-color: ', ';\n\n  &.control-max {\n    opacity: ', ';\n    cursor: ', ';\n\n    &:hover button {\n      box-shadow: ', '\n    }\n  }\n\n  &.control-min {\n    opacity: ', ';\n    cursor: ', ';\n\n    &:hover button {\n      box-shadow: ', '\n    }\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  align-items: center;\n'], ['\n  display: inline-flex;\n  align-items: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reset = require('../../utils/reset');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Passenger = exports.Passenger = _styledComponents2.default.div(_templateObject);

var Title = exports.Title = _styledComponents2.default.p(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.color.textDarker;
});

var Description = exports.Description = _styledComponents2.default.p(_templateObject3, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.text;
});

var Current = exports.Current = _styledComponents2.default.span(_templateObject4, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.textDarker;
});

var CountControl = exports.CountControl = _styledComponents2.default.div(_templateObject5, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.primary;
}, function (props) {
  return props.isMax === true ? 0.2 : 1;
}, function (props) {
  return props.isMax === true ? 'default' : 'pointer';
}, function (props) {
  return props.isMax === true && 'none';
}, function (props) {
  return props.isMin === true ? 0.2 : 1;
}, function (props) {
  return props.isMin === true ? 'default' : 'pointer';
}, function (props) {
  return props.isMin === true && 'none';
});

var PassangerCount = exports.PassangerCount = _styledComponents2.default.div(_templateObject6);

var CountControls = exports.CountControls = _styledComponents2.default.div(_templateObject7);