'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  transition-property: stroke, fill;\n  height: ', 'px;\n  width: ', 'px;\n  fill: ', ';\n  stroke: ', ';\n'], ['\n  ', ';\n  transition-property: stroke, fill;\n  height: ', 'px;\n  width: ', 'px;\n  fill: ', ';\n  stroke: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _transitions = require('../../utils/transitions');

var _theme = require('../../utils/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
  normal: 18,
  xxsmall: 15,
  xsmall: 24,
  small: 30,
  medium: 36,
  large: 42,
  xlarge: 54,
  xxlarge: 60
};

var IconSvg = _styledComponents2.default.svg(_templateObject, _transitions.switchTransition, function (_ref) {
  var size = _ref.size;
  return sizes[size];
}, function (_ref2) {
  var size = _ref2.size;
  return sizes[size];
}, function (_ref3) {
  var theme = _ref3.theme,
      colorKeys = _ref3.colorKeys;
  return (0, _theme.getThemeColor)(theme, colorKeys.fill);
}, function (_ref4) {
  var theme = _ref4.theme,
      colorKeys = _ref4.colorKeys;
  return (0, _theme.getThemeColor)(theme, colorKeys.stroke);
});

// Scoped inside `colorKeys` because `fill` and `stroke` are valid HTML attrs
var Icon = function Icon(_ref5) {
  var size = _ref5.size,
      fill = _ref5.fill,
      stroke = _ref5.stroke,
      prefix = _ref5.prefix,
      name = _ref5.name,
      style = _ref5.style,
      className = _ref5.className,
      inheritColor = _ref5.inheritColor;
  return _react2.default.createElement(
    IconSvg,
    {
      className: (0, _classnames2.default)(className, { 'icon-inherit-color': inheritColor }),
      size: size,
      colorKeys: {
        fill: fill,
        stroke: stroke
      },
      style: style
    },
    _react2.default.createElement('use', { xlinkHref: '#' + prefix + '_' + name })
  );
};

Icon.defaultProps = {
  prefix: 'kb',
  size: 'normal',
  fill: null,
  stroke: null,
  inheritColor: false
};

Icon.propTypes = {
  /* eslint-disable react/require-default-props */
  name: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  prefix: _propTypes2.default.string,
  fill: _theme.ThemingPropTypes.themeColor,
  stroke: _theme.ThemingPropTypes.themeColor,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  inheritColor: _propTypes2.default.bool
};

exports.default = (0, _styledComponents.withTheme)(Icon);