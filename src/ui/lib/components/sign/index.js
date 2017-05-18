'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: calc(50% - 9px);\n  right: 10px;\n  width: 18px;\n  height: 18px;\n  font-size: 14px;\n  line-height: 16px;\n  color: ', ';\n  border-radius: 50%;\n  border: 1px solid ', ';\n  background-color: #FFFFFF;\n  text-align: center;\n  cursor: pointer;\n  ', '\n  transition-property: color, border-color;\n\n  &:hover {\n    color: ', ';\n    border-color: ', ';\n  }\n\n  &.attention {\n    &:hover {\n      color: ', ';\n      border-color: ', ';\n    }\n  }\n'], ['\n  position: absolute;\n  top: calc(50% - 9px);\n  right: 10px;\n  width: 18px;\n  height: 18px;\n  font-size: 14px;\n  line-height: 16px;\n  color: ', ';\n  border-radius: 50%;\n  border: 1px solid ', ';\n  background-color: #FFFFFF;\n  text-align: center;\n  cursor: pointer;\n  ', '\n  transition-property: color, border-color;\n\n  &:hover {\n    color: ', ';\n    border-color: ', ';\n  }\n\n  &.attention {\n    &:hover {\n      color: ', ';\n      border-color: ', ';\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme-provider/theme');

var _transitions = require('../../utils/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = _styledComponents2.default.span(_templateObject, _theme.color.miscDark, _theme.color.misc, _transitions.switchTransition, _theme.color.primary, _theme.color.primary, _theme.color.secondaryDarker, _theme.color.secondaryDarker);

var Sign = function Sign(_ref) {
  var name = _ref.name,
      text = _ref.text;
  return _react2.default.createElement(
    Icon,
    {
      className: 'sign ' + name,
      name: name,
      text: text
    },
    text
  );
};

Sign.propTypes = {
  name: _react.PropTypes.string.isRequired,
  text: _react.PropTypes.string.isRequired
};

exports.default = Sign;