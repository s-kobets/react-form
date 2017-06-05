var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 0;\n    display: flex;\n    align-items: center;\n    padding: 3px ', 'px 5px;\n    ', ';\n    font-size: 14px;\n    line-height: 16px;\n    color: #FFFFFF;\n    border-radius: 3px;\n    background-color: ', ';\n    opacity: 0.97;\n    z-index: 2;\n'], ['\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 0;\n    display: flex;\n    align-items: center;\n    padding: 3px ', 'px 5px;\n    ', ';\n    font-size: 14px;\n    line-height: 16px;\n    color: #FFFFFF;\n    border-radius: 3px;\n    background-color: ', ';\n    opacity: 0.97;\n    z-index: 2;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  ', '\n  width: 280px;\n  font-size: ', 'px;\n  line-height: normal;\n  color: ', ';\n  border: 1px solid ', ';\n  background-color: #FFFFFF;\n  cursor: text;\n  ', '\n  ', '\n  transition-property: border-color, box-shadow;\n\n  &.has-badge {\n    padding-right: 35px;\n  }\n\n  &::placeholder {\n    color: ', ';\n  }\n\n  &:hover {\n    border-color: ', ';\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 1px ', ';\n    border-color: ', ';\n    outline-style: none;\n    z-index: 2;\n\n    & + .input-line {\n      display: none;\n    }\n  }\n\n  &:disabled {\n    background-color: ', ';\n    border: 1px solid ', ';\n    cursor: auto;\n\n    &:hover {\n      border-color: ', ';\n    }\n\n    &::placeholder {\n      color: ', ';\n    }\n  }\n'], ['\n  position: relative;\n  ', '\n  width: 280px;\n  font-size: ', 'px;\n  line-height: normal;\n  color: ', ';\n  border: 1px solid ', ';\n  background-color: #FFFFFF;\n  cursor: text;\n  ', '\n  ', '\n  transition-property: border-color, box-shadow;\n\n  &.has-badge {\n    padding-right: 35px;\n  }\n\n  &::placeholder {\n    color: ', ';\n  }\n\n  &:hover {\n    border-color: ', ';\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 1px ', ';\n    border-color: ', ';\n    outline-style: none;\n    z-index: 2;\n\n    & + .input-line {\n      display: none;\n    }\n  }\n\n  &:disabled {\n    background-color: ', ';\n    border: 1px solid ', ';\n    cursor: auto;\n\n    &:hover {\n      border-color: ', ';\n    }\n\n    &::placeholder {\n      color: ', ';\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-block;\n'], ['\n  position: relative;\n  display: inline-block;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 2px;\n  border-radius: 3px 0 0 3px;\n  background-color: ', ' \n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 2px;\n  border-radius: 3px 0 0 3px;\n  background-color: ', ' \n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizeInput from '../../utils/input';
import { color } from '../theme-provider/theme';
import { switchTransition } from '../../utils/transitions';

var calculateBorderAndRadius = function calculateBorderAndRadius(neighboringInGroup) {
  if (neighboringInGroup === 'both') {
    return '\n      border-right-color: transparent;\n    ';
  } else if (neighboringInGroup === 'left') {
    return '\n      border-radius: 0 3px 3px 0;\n    ';
  } else if (neighboringInGroup === 'right') {
    return '\n      border-radius: 3px 0 0 3px\n      border-right-color: transparent;\n    ';
  }

  return 'border-radius: 3px';
};

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

var Error = styled.span(_templateObject, sizeInput('normal', SIZE, customNumber, 'padding'), function (_ref) {
  var size = _ref.size;
  return size === 'small' && ' width: 100%';
}, color.fail);

var Input = styled.input(_templateObject2, function (_ref2) {
  var size = _ref2.size;
  return sizeInput(size, SIZE, customNumber);
}, function (_ref3) {
  var size = _ref3.size;
  return TYPOGRAPHY[size];
}, color.textDarker, color.misc, function (_ref4) {
  var neighboringInGroup = _ref4.neighboringInGroup;
  return calculateBorderAndRadius(neighboringInGroup);
}, switchTransition, color.miscDark, color.primary, color.primary, color.primary, color.miscLightest, color.miscLightest, color.miscLightest, color.misc);

var InputWrap = styled.div(_templateObject3);
var InputLine = styled.span(_templateObject4, function (props) {
  return props.error ? color.fail : color.success;
});

var InputComponent = function InputComponent(_ref5) {
  var size = _ref5.size,
      disabled = _ref5.disabled,
      placeholder = _ref5.placeholder,
      success = _ref5.success,
      error = _ref5.error,
      value = _ref5.value,
      props = _objectWithoutProperties(_ref5, ['size', 'disabled', 'placeholder', 'success', 'error', 'value']);

  return React.createElement(
    InputWrap,
    null,
    value ? React.createElement(Input, _extends({}, props, {
      className: props.className,
      type: props.type,
      name: props.name,
      placeholder: placeholder,
      size: size,
      disabled: disabled,
      value: value
    })) : React.createElement(Input, _extends({}, props, {
      className: props.className,
      type: props.type,
      name: props.name,
      placeholder: placeholder,
      size: size,
      disabled: disabled
    })),
    (error || success) && React.createElement(InputLine, {
      success: success,
      error: error,
      className: 'input-line'
    }),
    error && React.createElement(
      Error,
      { error: true, size: size },
      props.errorText
    )
  );
};

InputComponent.defaultProps = {
  type: 'text',
  name: 'input',
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
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  errorText: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default InputComponent;