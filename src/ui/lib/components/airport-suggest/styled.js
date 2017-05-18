'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = exports.GeoLabel = exports.Value = exports.Geo = exports.SuggestIcon = exports.AirportSuggestContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: stretch;\n\n  ', '\n  color: ', ';\n  font-size: 16px;\n  line-height: 20px;\n  white-space: nowrap;\n\n  box-sizing: content-box;\n  height: 20px;\n  padding: 5px 0 5px 15px;\n  background: ', ';\n\n  .react-autosuggest__suggestion--highlighted &,\n  &:hover {\n    background: ', '\n  }\n'], ['\n  display: flex;\n  align-items: stretch;\n\n  ', '\n  color: ', ';\n  font-size: 16px;\n  line-height: 20px;\n  white-space: nowrap;\n\n  box-sizing: content-box;\n  height: 20px;\n  padding: 5px 0 5px 15px;\n  background: ', ';\n\n  .react-autosuggest__suggestion--highlighted &,\n  &:hover {\n    background: ', '\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 2.5px 8px 2.5px 0;\n'], ['\n  padding: 2.5px 8px 2.5px 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: inline-block;\n  justify-content: flex-start;\n\n  text-overflow: ellipsis;\n  overflow: hidden;\n'], ['\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: inline-block;\n  justify-content: flex-start;\n\n  text-overflow: ellipsis;\n  overflow: hidden;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-weight: 600;\n'], ['\n  font-weight: 600;\n']),
    _templateObject5 = _taggedTemplateLiteral([''], ['']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex-grow: 0;\n  flex-shrink: 0;\n\n  ', '\n  font-size: 14px;\n  line-height: 18px;\n  color: ', ';\n  text-align: left;\n\n  padding: 1px 0;\n  margin-left: 15px;\n  width: 46px;\n'], ['\n  flex-grow: 0;\n  flex-shrink: 0;\n\n  ', '\n  font-size: 14px;\n  line-height: 18px;\n  color: ', ';\n  text-align: left;\n\n  padding: 1px 0;\n  margin-left: 15px;\n  width: 46px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AirportSuggestContainer = exports.AirportSuggestContainer = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.font;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.textDarker;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.secondaryLightest;
});

var SuggestIcon = exports.SuggestIcon = _styledComponents2.default.div(_templateObject2);

var Geo = exports.Geo = _styledComponents2.default.div(_templateObject3);

var Value = exports.Value = _styledComponents2.default.b(_templateObject4);
var GeoLabel = exports.GeoLabel = _styledComponents2.default.span(_templateObject5);

var Code = exports.Code = _styledComponents2.default.div(_templateObject6, function (_ref5) {
  var theme = _ref5.theme;
  return theme.font;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.text;
});