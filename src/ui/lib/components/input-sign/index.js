'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: calc(50% - 9px);\n  right: ', 'px;\n  width: 18px;\n  height: 18px;\n  font-size: 14px;\n  line-height: 16px;\n  color: ', ';\n  border-radius: 50%;\n  border: 1px solid ', ';\n  background-color: #FFFFFF;\n  text-align: center;\n  cursor: pointer;\n  ', '\n  transition-property: color, border-color;\n\n  &:hover {\n    color: ', ';\n    border-color: ', ';\n  }\n'], ['\n  position: absolute;\n  top: calc(50% - 9px);\n  right: ', 'px;\n  width: 18px;\n  height: 18px;\n  font-size: 14px;\n  line-height: 16px;\n  color: ', ';\n  border-radius: 50%;\n  border: 1px solid ', ';\n  background-color: #FFFFFF;\n  text-align: center;\n  cursor: pointer;\n  ', '\n  transition-property: color, border-color;\n\n  &:hover {\n    color: ', ';\n    border-color: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme-provider/theme');

var _transitions = require('../../utils/transitions');

var _inputSign = require('../../utils/input-sign');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = _styledComponents2.default.span(_templateObject, function (_ref) {
  var size = _ref.size;
  return _inputSign.RIGHT[size];
}, _theme.color.miscDark, _theme.color.misc, _transitions.switchTransition, function (props) {
  return props.name === 'attention' ? _theme.color.fail : _theme.color.primaryDarkest;
}, function (props) {
  return props.name === 'attention' ? _theme.color.secondaryDarker : _theme.color.primary;
});

var InputSign = function InputSign(_ref2) {
  var name = _ref2.name,
      text = _ref2.text,
      size = _ref2.size;
  return _react2.default.createElement(
    Icon,
    {
      className: 'sign ' + name,
      name: name,
      text: text,
      size: size
    },
    text
  );
};

InputSign.defaultProps = {
  size: ''
};

InputSign.propTypes = {
  name: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.string
};

exports.default = InputSign;