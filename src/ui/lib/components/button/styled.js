'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrap = exports.StyledButtonText = exports.StyledButton = exports.SIZES = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n\n  color: ', ';\n  background: ', ';\n  border-radius: ', 'px;\n\n  font-size: ', 'px;\n  line-height: ', 'px;\n\n  ', ';\n\n  ', '\n  transition-property: opacity, box-shadow;\n\n  ', '\n\n  &:hover {\n    ', '\n  }\n\n  &:active {\n    ', '\n  }\n'], ['\n  ', '\n\n  color: ', ';\n  background: ', ';\n  border-radius: ', 'px;\n\n  font-size: ', 'px;\n  line-height: ', 'px;\n\n  ', ';\n\n  ', '\n  transition-property: opacity, box-shadow;\n\n  ', '\n\n  &:hover {\n    ', '\n  }\n\n  &:active {\n    ', '\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: top;\n\n  padding: ', '\n'], ['\n  display: inline-block;\n  vertical-align: top;\n\n  padding: ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  vertical-align: top;\n  justify-content: center;\n  align-items: center;\n\n  width: ', 'px;\n  height: ', 'px;\n'], ['\n  display: inline-flex;\n  vertical-align: top;\n  justify-content: center;\n  align-items: center;\n\n  width: ', 'px;\n  height: ', 'px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reset = require('../../utils/reset');

var _transitions = require('../../utils/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SIZES = exports.SIZES = {
  small: 12,
  normal: 15,
  large: 18
};

var TYPOGRAPHY = {
  small: 16,
  normal: 18,
  large: 20
};

var calculateButtonPadding = function calculateButtonPadding(size, icon, hasLeftIcon, hasRightIcon) {
  var spacing = SIZES[size];
  var typographyRelatedPadding = ((spacing * 2 - TYPOGRAPHY[size]) / 2).toFixed(1);
  var iconVisualCenterShift = 5 / 4;
  var iconPadding = (SIZES[size] / 2 * iconVisualCenterShift).toFixed(1);

  // Symetric padding around icon-only button for circle effect
  if (icon) {
    return 'padding: ' + typographyRelatedPadding + 'px';
  }

  return '\n    padding: ' + typographyRelatedPadding + 'px;\n    padding-right: ' + (hasRightIcon ? iconPadding : spacing) + 'px;\n    padding-left: ' + (hasLeftIcon ? iconPadding : spacing) + 'px;\n  ';
};

var calculateTextPadding = function calculateTextPadding(size, hasLeftIcon, hasRightIcon) {
  var iconVisualCenterShift = 3 / 4;
  var iconPadding = (SIZES[size] / 2 * iconVisualCenterShift).toFixed(1);

  return '0 ' + (hasRightIcon ? iconPadding : 0) + 'px 0 ' + (hasLeftIcon ? iconPadding : 0) + 'px';
};

var StyledButton = exports.StyledButton = _styledComponents2.default.button(_templateObject, _reset.button, function (_ref) {
  var theme = _ref.theme;
  return theme.color.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.primary;
}, function (_ref3) {
  var size = _ref3.size;
  return SIZES[size];
}, function (_ref4) {
  var size = _ref4.size;
  return TYPOGRAPHY[size];
}, function (_ref5) {
  var size = _ref5.size;
  return TYPOGRAPHY[size];
}, function (_ref6) {
  var size = _ref6.size,
      isIconOnly = _ref6.isIconOnly,
      hasLeftIcon = _ref6.hasLeftIcon,
      hasRightIcon = _ref6.hasRightIcon;
  return calculateButtonPadding(size, isIconOnly, hasLeftIcon, hasRightIcon);
}, _transitions.switchTransition, function (_ref7) {
  var disabled = _ref7.disabled;
  return disabled ? 'opacity: .2;' : '';
}, function (_ref8) {
  var disabled = _ref8.disabled,
      theme = _ref8.theme;
  return !disabled ? '\n      cursor: pointer;\n      box-shadow: 0 0 0 1px ' + theme.color.primary + ';\n    ' : '';
}, function (_ref9) {
  var disabled = _ref9.disabled,
      theme = _ref9.theme;
  return !disabled ? '\n      background: ' + theme.color.primaryDark + ';\n      box-shadow: none;\n    ' : '';
});

var StyledButtonText = exports.StyledButtonText = _styledComponents2.default.span(_templateObject2, function (_ref10) {
  var size = _ref10.size,
      hasLeftIcon = _ref10.hasLeftIcon,
      hasRightIcon = _ref10.hasRightIcon;
  return calculateTextPadding(size, hasLeftIcon, hasRightIcon);
});

var IconWrap = exports.IconWrap = _styledComponents2.default.span(_templateObject3, function (_ref11) {
  var size = _ref11.size;
  return TYPOGRAPHY[size];
}, function (_ref12) {
  var size = _ref12.size;
  return TYPOGRAPHY[size];
});