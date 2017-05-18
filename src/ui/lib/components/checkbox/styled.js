'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxLabel = exports.LabelText = exports.StyledCheckbox = exports.IconWrap = exports.fadeInDown = exports.CheckboxInput = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n'], ['\n  display: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation: ', ';\n  display: inline-block;\n  margin: -1px;\n  height: 18px;\n  width: 18px;\n'], ['\n  animation: ', ';\n  display: inline-block;\n  margin: -1px;\n  height: 18px;\n  width: 18px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', ';\n  transition-property: background, border;\n  background: ', ';\n  border: ', ';\n  border-radius: 3px;\n  height: 18px;\n  min-width: 18px;\n  width: 18px;\n  line-height: 16px;\n'], ['\n  ', ';\n  transition-property: background, border;\n  background: ', ';\n  border: ', ';\n  border-radius: 3px;\n  height: 18px;\n  min-width: 18px;\n  width: 18px;\n  line-height: 16px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', ';\n  transition-property: color;\n  margin-left: 6px;\n  width: 100%;\n  ', '\n'], ['\n  ', ';\n  transition-property: color;\n  margin-left: 6px;\n  width: 100%;\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  cursor: ', '\n  display: inline-flex;\n  align-items: start;\n  font-size: 16px;\n  line-height: 18px;\n  position: relative;\n  user-select: none;\n  width: 100%;\n\n\n  &:hover .checkbox {\n    border-color: ', ';\n  };\n\n  &:hover .label-text {\n    color: ', ';\n  };\n'], ['\n  cursor: ', '\n  display: inline-flex;\n  align-items: start;\n  font-size: 16px;\n  line-height: 18px;\n  position: relative;\n  user-select: none;\n  width: 100%;\n\n\n  &:hover .checkbox {\n    border-color: ', ';\n  };\n\n  &:hover .label-text {\n    color: ', ';\n  };\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _transitions = require('../../utils/transitions');

var _animations = require('../../utils/animations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getCheckboxBackground = function getCheckboxBackground(props, theme) {
  if (props.checked) {
    return theme.color.primary;
  } else if (props.disabled) {
    return theme.color.textLightest;
  }return theme.color.background;
};

var getCheckboxBorder = function getCheckboxBorder(props, theme) {
  if (props.checked) {
    return theme.color.primary;
  } else if (props.disabled) {
    return theme.color.textLighter;
  }return theme.color.misc;
};

var CheckboxInput = exports.CheckboxInput = _styledComponents2.default.input(_templateObject);

var fadeInDown = exports.fadeInDown = _animations.floatFromTop;

var IconWrap = exports.IconWrap = _styledComponents2.default.span(_templateObject2, function (props) {
  return props.checked ? fadeInDown + ' 0.15s' : 'none';
});

var StyledCheckbox = exports.StyledCheckbox = _styledComponents2.default.span(_templateObject3, _transitions.switchTransition, function (props) {
  return getCheckboxBackground(props, props.theme);
}, function (props) {
  return '1px solid ' + getCheckboxBorder(props, props.theme);
});

var LabelText = exports.LabelText = _styledComponents2.default.span(_templateObject4, _transitions.switchTransition, function (_ref) {
  var disabled = _ref.disabled,
      theme = _ref.theme;
  return disabled && 'color: ' + theme.color.textLight + ';';
});

var CheckboxLabel = exports.CheckboxLabel = _styledComponents2.default.label(_templateObject5, function (props) {
  return props.disabled ? 'default' : 'pointer';
}, function (_ref2) {
  var theme = _ref2.theme,
      disabled = _ref2.disabled;
  return disabled ? theme.color.textLighter : theme.color.primary;
}, function (_ref3) {
  var theme = _ref3.theme,
      disabled = _ref3.disabled;
  return disabled ? theme.color.textLight : theme.color.primaryDarkest;
});