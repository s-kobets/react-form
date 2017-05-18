'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 0;\n    display: flex;\n    align-items: center;\n    padding: 3px ', 'px 5px;\n    ', ';\n    font-size: 14px;\n    line-height: 16px;\n    color: #FFFFFF;\n    border-radius: 3px;\n    background-color: ', ';\n    opacity: 0.97;\n    z-index: 2;\n'], ['\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 0;\n    display: flex;\n    align-items: center;\n    padding: 3px ', 'px 5px;\n    ', ';\n    font-size: 14px;\n    line-height: 16px;\n    color: #FFFFFF;\n    border-radius: 3px;\n    background-color: ', ';\n    opacity: 0.97;\n    z-index: 2;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  width: 280px;\n  font-size: ', 'px;\n  line-height: normal;\n  color: ', ';\n  border: 1px solid ', ';\n  border-radius: 3px;\n  background-color: #FFFFFF;\n  cursor: text;\n  ', '\n  transition-property: border-color, box-shadow;\n\n  &.has-badge {\n    padding-right: 35px;\n  }\n\n  &::placeholder {\n    color: ', ';\n  }\n\n  &:hover {\n    border-color: ', ';\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 1px ', ';\n    border-color: ', ';\n    outline-style: none;\n\n    & + .input-line {\n      display: none;\n    }\n  }\n\n  &:disabled {\n    background-color: ', ';\n    border: 1px solid ', ';\n    cursor: auto;\n\n    &:hover {\n      border-color: ', ';\n    }\n\n    &::placeholder {\n      color: ', ';\n    }\n  }\n'], ['\n  ', '\n  width: 280px;\n  font-size: ', 'px;\n  line-height: normal;\n  color: ', ';\n  border: 1px solid ', ';\n  border-radius: 3px;\n  background-color: #FFFFFF;\n  cursor: text;\n  ', '\n  transition-property: border-color, box-shadow;\n\n  &.has-badge {\n    padding-right: 35px;\n  }\n\n  &::placeholder {\n    color: ', ';\n  }\n\n  &:hover {\n    border-color: ', ';\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 1px ', ';\n    border-color: ', ';\n    outline-style: none;\n\n    & + .input-line {\n      display: none;\n    }\n  }\n\n  &:disabled {\n    background-color: ', ';\n    border: 1px solid ', ';\n    cursor: auto;\n\n    &:hover {\n      border-color: ', ';\n    }\n\n    &::placeholder {\n      color: ', ';\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  flex-direction: column;\n'], ['\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  flex-direction: column;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 2px;\n  border-radius: 3px 0 0 3px;\n  background-color: ', ' \n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 2px;\n  border-radius: 3px 0 0 3px;\n  background-color: ', ' \n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _input = require('../../utils/input');

var _input2 = _interopRequireDefault(_input);

var _theme = require('../theme-provider/theme');

var _transitions = require('../../utils/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SIZE = {
  large: 15,
  normal: 12,
  small: 9
};

var TYPOGRAPHY = {
  large: 18,
  normal: 16,
  small: 16
};

var arr = [];
Object.keys(SIZE).forEach(function (element) {
  arr.push(SIZE[element]);
});

var customNumber = arr.reduce(function (x, y) {
  return Math.abs(x - y);
});

var Error = _styledComponents2.default.span(_templateObject, (0, _input2.default)('normal', SIZE, customNumber, 'padding'), function (_ref) {
  var size = _ref.size;
  return size === 'small' && ' width: 100%';
}, _theme.color.fail);

var Input = _styledComponents2.default.input(_templateObject2, function (_ref2) {
  var size = _ref2.size;
  return (0, _input2.default)(size, SIZE, customNumber);
}, function (_ref3) {
  var size = _ref3.size;
  return TYPOGRAPHY[size];
}, _theme.color.textDarker, _theme.color.misc, _transitions.switchTransition, _theme.color.miscDark, _theme.color.primary, _theme.color.primary, _theme.color.primary, _theme.color.miscLightest, _theme.color.miscLightest, _theme.color.miscLightest, _theme.color.misc);

var InputWrap = _styledComponents2.default.span(_templateObject3);
var InputLine = _styledComponents2.default.span(_templateObject4, function (props) {
  return props.error ? _theme.color.fail : _theme.color.success;
});

var InputComponent = function InputComponent(_ref4) {
  var size = _ref4.size,
      disabled = _ref4.disabled,
      placeholder = _ref4.placeholder,
      success = _ref4.success,
      error = _ref4.error,
      value = _ref4.value,
      props = _objectWithoutProperties(_ref4, ['size', 'disabled', 'placeholder', 'success', 'error', 'value']);

  return _react2.default.createElement(
    InputWrap,
    props,
    value ? _react2.default.createElement(Input, {
      className: props.className,
      type: props.type,
      name: props.name,
      placeholder: placeholder,
      size: size,
      disabled: disabled,
      value: value
    }) : _react2.default.createElement(Input, {
      className: props.className,
      type: props.type,
      name: props.name,
      placeholder: placeholder,
      size: size,
      disabled: disabled
    }),
    (error || success) && _react2.default.createElement(InputLine, {
      success: success,
      error: error,
      className: 'input-line'
    }),
    error && _react2.default.createElement(
      Error,
      { error: true, size: size },
      props.errorText
    )
  );
};

InputComponent.defaultProps = {
  errorText: '',
  error: false,
  success: false,
  size: '',
  disabled: false,
  placeholder: '',
  className: 'input',
  value: ''
};

InputComponent.propTypes = {
  type: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  errorText: _propTypes2.default.string,
  error: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string
};

exports.default = InputComponent;