'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n'], ['\n  ', '\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('./theme');

var defaultTheme = _interopRequireWildcard(_theme);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStylesScope = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.font;
});

var ThemeAndScopedStylesProvider = function ThemeAndScopedStylesProvider(_ref2) {
  var theme = _ref2.theme,
      children = _ref2.children;
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    {
      theme: _extends({}, defaultTheme, {
        theme: theme
      })
    },
    _react2.default.createElement(
      GlobalStylesScope,
      null,
      children
    )
  );
};

ThemeAndScopedStylesProvider.propTypes = {
  children: _propTypes2.default.node.isRequired,
  theme: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.shape({
    font: _propTypes2.default.string
  })])
};

ThemeAndScopedStylesProvider.defaultProps = {
  theme: defaultTheme
};

exports.default = ThemeAndScopedStylesProvider;