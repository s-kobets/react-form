'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = exports.GeoLabel = exports.ValuePlaceholder = exports.Spell = exports.Geo = exports.Input = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: inherit;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 18px;\n  color: inherit;\n'], ['\n  font-family: inherit;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 18px;\n  color: inherit;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', ';\n\n  height: 42px;\n  width: 100%;\n  min-width: 180px;\n\n  display: flex;\n  align-items: stretch;\n\n  position: relative;\n\n  box-sizing: border-box;\n  border: 2px solid ', ';\n\n  ', '\n\n  z-index: 1;\n  ', '\n\n  ', '\n'], ['\n  color: ', ';\n\n  height: 42px;\n  width: 100%;\n  min-width: 180px;\n\n  display: flex;\n  align-items: stretch;\n\n  position: relative;\n\n  box-sizing: border-box;\n  border: 2px solid ', ';\n\n  ', '\n\n  z-index: 1;\n  ', '\n\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  padding: 10px 10px;\n  ', '\n  background: transparent;\n\n  ', '\n  font-weight: 600;\n\n  ', '\n\n  &:focus ~ .airport-input__geo .airport-input__spell {\n    display: block;\n  }\n'], ['\n  ', '\n\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  padding: 10px 10px;\n  ', '\n  background: transparent;\n\n  ', '\n  font-weight: 600;\n\n  ', '\n\n  &:focus ~ .airport-input__geo .airport-input__spell {\n    display: block;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    ', '\n    color: ', ';\n  '], ['\n    ', '\n    color: ', ';\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  pointer-events: none;\n  flex-grow: 1;\n  flex-shrink: 0;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding: 10px 0;\n  padding-left: ', ';\n'], ['\n  pointer-events: none;\n  flex-grow: 1;\n  flex-shrink: 0;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding: 10px 0;\n  padding-left: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n\n  display: none;\n\n  pointer-events: none;\n  flex-grow: 1;\n  flex-shrink: 0;\n\n  padding: 0;\n  margin: 0;\n  background: transparent;\n\n  ', '\n  font-weight: 600;\n  color: ', '\n'], ['\n  ', '\n\n  display: none;\n\n  pointer-events: none;\n  flex-grow: 1;\n  flex-shrink: 0;\n\n  padding: 0;\n  margin: 0;\n  background: transparent;\n\n  ', '\n  font-weight: 600;\n  color: ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  visibility: hidden;\n\n  ', '\n  font-weight: 600;\n'], ['\n  visibility: hidden;\n\n  ', '\n  font-weight: 600;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  pointer-events: none;\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n\n  ', '\n  font-size: 14px;\n  color: ', ';\n\n  padding: 11px 10px 9px 9px;\n  padding-right: ', ';\n\n  &:not(:empty)::before {\n    content: \'\';\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -12px;\n    width: 12px;\n    height: 100%;\n\n    background: ', ';\n  }\n'], ['\n  pointer-events: none;\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n\n  ', '\n  font-size: 14px;\n  color: ', ';\n\n  padding: 11px 10px 9px 9px;\n  padding-right: ', ';\n\n  &:not(:empty)::before {\n    content: \'\';\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -12px;\n    width: 12px;\n    height: 100%;\n\n    background: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _reset = require('../../utils/reset');

var _placeholder = require('../../utils/placeholder');

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fontStyle = (0, _styledComponents.css)(_templateObject);

var fadeGradient = function fadeGradient(_ref) {
  var theme = _ref.theme;
  return (
    /* eslint-disable prefer-template */
    'linear-gradient(' + '90deg, ' + (0, _polished.transparentize)(1, theme.color.background) + ' 0%, ' + theme.color.background + ' 100%' + ')'
  );
};

var Container = exports.Container = _styledComponents2.default.div(_templateObject2, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.textDarker;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.primaryLight;
}, function (_ref4) {
  var neighboringInGroup = _ref4.neighboringInGroup;

  if (neighboringInGroup === 'right') {
    return 'border-radius: 21px 0 0 21px;';
  } else if (neighboringInGroup === 'left') {
    return 'border-radius: 0 21px 21px 0;';
  } else if (neighboringInGroup !== 'both') {
    return 'border-radius: 21px;';
  }

  return '';
}, function (_ref5) {
  var neighboringInGroup = _ref5.neighboringInGroup;
  return ['left', 'both'].includes(neighboringInGroup) ? 'margin-left: -2px;' : '';
}, function (_ref6) {
  var hasError = _ref6.hasError,
      focused = _ref6.focused,
      theme = _ref6.theme;

  if (focused) {
    return '\n        z-index: 2;\n        border-color: ' + theme.color.secondary + ';\n      ';
  } else if (hasError) {
    return '\n        border-color: ' + theme.color.fail + ';\n      ';
  }

  return '';
});

var Input = exports.Input = _styledComponents2.default.input(_templateObject3, _reset.control, function (_ref7) {
  var neighboringInGroup = _ref7.neighboringInGroup;

  if (neighboringInGroup === 'right') {
    return 'padding-right: 16px;';
  } else if (neighboringInGroup === 'left') {
    return 'padding-left: 16px;';
  } else if (neighboringInGroup !== 'both') {
    return 'padding: 10px 16px;';
  }

  return '';
}, fontStyle, (0, _placeholder2.default)(_templateObject4, fontStyle, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.miscDark;
}));

var Geo = exports.Geo = _styledComponents2.default.div(_templateObject5, function (_ref9) {
  var neighboringInGroup = _ref9.neighboringInGroup;
  return neighboringInGroup === 'left' || !neighboringInGroup ? '16px' : '10px';
});

// Use same component as in input due specific text rendering in inputs
var Spell = exports.Spell = _styledComponents2.default.input(_templateObject6, _reset.control, fontStyle, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.textLight;
});

var ValuePlaceholder = exports.ValuePlaceholder = _styledComponents2.default.div(_templateObject7, fontStyle);

var GeoLabel = exports.GeoLabel = _styledComponents2.default.div(_templateObject8, fontStyle);

var Code = exports.Code = _styledComponents2.default.div(_templateObject9, fontStyle, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.text;
}, function (_ref12) {
  var neighboringInGroup = _ref12.neighboringInGroup;
  return neighboringInGroup === 'right' || !neighboringInGroup ? '16px' : '10px';
}, function (props) {
  return fadeGradient(props);
});