var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  line-height: 16px;\n  color: #fff;\n  border-radius: 3px;\n  opacity: 0.97;\n  z-index: 2;\n  padding: 3px ', ' 5px;\n  ', ';\n  background-color: ', ';\n'], ['\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  line-height: 16px;\n  color: #fff;\n  border-radius: 3px;\n  opacity: 0.97;\n  z-index: 2;\n  padding: 3px ', ' 5px;\n  ', ';\n  background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  flex-grow: 1;\n  max-width: 100%;\n  height: 100%;\n  line-height: normal;\n  border: none;\n  user-select: none;\n  box-sizing: border-box;\n  ', ';\n  ', ';\n  padding-left: ', ';\n  padding-right: ', ';\n  font-size: ', 'px;\n  color: ', ';\n  background-color: ', ';\n  cursor: ', ';\n  ', ';\n\n  &::placeholder {\n    color: ', ';\n  }\n\n  &:focus {\n    outline-style: none;\n\n    & + .input-line {\n      display: none;\n    }\n  }\n\n  &:disabled {\n    &::placeholder {\n      color: ', ';\n    }\n  }\n'], ['\n  position: relative;\n  flex-grow: 1;\n  max-width: 100%;\n  height: 100%;\n  line-height: normal;\n  border: none;\n  user-select: none;\n  box-sizing: border-box;\n  ', ';\n  ', ';\n  padding-left: ', ';\n  padding-right: ', ';\n  font-size: ', 'px;\n  color: ', ';\n  background-color: ', ';\n  cursor: ', ';\n  ', ';\n\n  &::placeholder {\n    color: ', ';\n  }\n\n  &:focus {\n    outline-style: none;\n\n    & + .input-line {\n      display: none;\n    }\n  }\n\n  &:disabled {\n    &::placeholder {\n      color: ', ';\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 280px;\n  transition-property: border-color, box-shadow;\n  border-width: 1px;\n  border-style: solid;\n  ', '\n  ', '\n  ', ';\n  flex-direction: ', ';\n  ', '\n  height: ', ';\n  box-shadow: ', ';\n  z-index: ', ';\n\n  &:hover {\n    border-color: ', ';\n    z-index: 2;\n  }\n\n'], ['\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 280px;\n  transition-property: border-color, box-shadow;\n  border-width: 1px;\n  border-style: solid;\n  ', '\n  ', '\n  ', ';\n  flex-direction: ', ';\n  ', '\n  height: ', ';\n  box-shadow: ', ';\n  z-index: ', ';\n\n  &:hover {\n    border-color: ', ';\n    z-index: 2;\n  }\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 2px;\n  border-radius: 3px 0 0 3px;\n  background-color: ', ' \n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 2px;\n  border-radius: 3px 0 0 3px;\n  background-color: ', ' \n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  transition-property: transform;\n  margin-right: ', ';\n  ', '\n'], ['\n  transition-property: transform;\n  margin-right: ', ';\n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: inline-block;\n  cursor: pointer;\n'], ['\n  display: inline-block;\n  cursor: pointer;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizeInput from '../../utils/input';
import { switchTransition } from '../../utils/transitions';
import { borderSmall } from '../../utils/borders';
import Icon from '../icons';

var calculateBorderAndRadius = function calculateBorderAndRadius(neighboringInGroup) {
  if (neighboringInGroup === 'both') {
    return '\n      margin-left: -1px;\n    ';
  } else if (neighboringInGroup === 'left') {
    return '\n      margin-left: -1px;\n      border-radius: 0 3px 3px 0;\n    ';
  } else if (neighboringInGroup === 'right') {
    return '\n      border-radius: 3px 0 0 3px\n    ';
  }

  return borderSmall;
};

var paddingInputWrapIcon = function paddingInputWrapIcon(props) {
  var leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      size = props.size,
      positioDropdown = props.positioDropdown;

  if (leftIcon && rightIcon) {
    return '\n      padding-left: ' + (size === 'large' ? '9px' : '6px') + ';\n      padding-right: ' + (size === 'large' ? '9px' : '6px') + ';\n    ';
  } else if (leftIcon || positioDropdown === 'left') {
    return 'padding-left: ' + (size === 'large' ? '9px' : '6px') + ';';
  } else if (rightIcon || positioDropdown === 'right') {
    return 'padding-right: ' + (size === 'large' ? '9px' : '6px') + ';';
  }
  return false;
};

var marginInputForIcon = function marginInputForIcon(props) {
  var leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      size = props.size,
      positioDropdown = props.positioDropdown;

  if (leftIcon && rightIcon) {
    return '\n      margin-left: ' + (size === 'large' ? '8px' : '5px') + ';\n      margin-right: ' + (size === 'large' ? '8px' : '5px') + ';\n    ';
  } else if (leftIcon || positioDropdown === 'left') {
    return 'margin-left: ' + (size === 'large' ? '8px' : '5px') + ';';
  } else if (rightIcon && positioDropdown) {
    return 'margin-right: 3px;';
  } else if (rightIcon || positioDropdown === 'right') {
    return 'margin-right: ' + (size === 'large' ? '8px' : '5px') + ';';
  }
  return false;
};

var borderInput = function borderInput(props) {
  var active = props.active,
      theme = props.theme,
      disabled = props.disabled;

  if (active) {
    return 'border-color: ' + theme.color.primary;
  } else if (disabled) {
    return 'border-color: ' + theme.color.miscLightest;
  }
  return 'border-color: ' + theme.color.misc;
};

var SIZE = {
  large: 14,
  normal: 11,
  small: 8
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

var reduceArr = arr.reduce(function (x, y) {
  return Math.abs(x - y);
});

var Error = styled.span(_templateObject, sizeInput('normal', SIZE, reduceArr, 'padding'), function (_ref) {
  var size = _ref.size;
  return size === 'small' && ' width: 100%';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.fail;
});

var Input = styled.input(_templateObject2, borderSmall, marginInputForIcon, function (_ref3) {
  var size = _ref3.size;
  return sizeInput(size, SIZE, reduceArr, 'padding');
}, function (_ref4) {
  var size = _ref4.size;
  return sizeInput(size, SIZE, reduceArr, 'padding');
}, function (_ref5) {
  var size = _ref5.size;
  return TYPOGRAPHY[size];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.textDarker;
}, function (_ref7) {
  var disabled = _ref7.disabled,
      theme = _ref7.theme;
  return disabled ? theme.color.miscLightest : '#fff';
}, function (_ref8) {
  var disabled = _ref8.disabled;
  return disabled ? 'auto' : 'text';
}, function (_ref9) {
  var neighboringInGroup = _ref9.neighboringInGroup;
  return calculateBorderAndRadius(neighboringInGroup);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.miscDark;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.misc;
});

var InputWrap = styled.div(_templateObject3, switchTransition, borderInput, paddingInputWrapIcon, function (_ref12) {
  var positioDropdown = _ref12.positioDropdown;
  return positioDropdown === 'left' && 'row-reverse';
}, function (_ref13) {
  var neighboringInGroup = _ref13.neighboringInGroup;
  return calculateBorderAndRadius(neighboringInGroup);
}, function (_ref14) {
  var size = _ref14.size;
  return sizeInput(size, SIZE, reduceArr, 'height');
}, function (_ref15) {
  var active = _ref15.active,
      theme = _ref15.theme;
  return active && '0 0 0 1px ' + theme.color.primary;
}, function (_ref16) {
  var active = _ref16.active;
  return active ? '3' : '1';
}, function (_ref17) {
  var theme = _ref17.theme,
      disabled = _ref17.disabled;
  return !disabled && theme.color.primary;
});
var InputLine = styled.span(_templateObject4, function (_ref18) {
  var theme = _ref18.theme,
      success = _ref18.success;
  return success ? theme.color.success : theme.color.fail;
});

var IconWrapper = styled(Icon)(_templateObject5, function (_ref19) {
  var positioDropdown = _ref19.positioDropdown,
      rightIcon = _ref19.rightIcon;
  return positioDropdown && rightIcon && '1px;';
}, function (_ref20) {
  var isActive = _ref20.isActive;
  return isActive && 'transform: rotate(-180deg);';
});

var BlockClick = styled.div(_templateObject6);

var InputComponent = function (_Component) {
  _inherits(InputComponent, _Component);

  function InputComponent(props) {
    _classCallCheck(this, InputComponent);

    var _this = _possibleConstructorReturn(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).call(this, props));

    _this.onActionBlur = function () {
      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
      _this.setState({
        isActive: false
      });
    };

    _this.onActionFocus = function () {
      if (_this.props.onFocus) {
        _this.props.onFocus();
      }
      _this.setState({
        isActive: true
      });
    };

    _this.onFocusInput = function () {
      _this.textInput.focus();
    };

    _this.onClickIconDropdown = function (event) {
      _this.props.onToggleDropdown(event, !_this.props.isDropdown);
      _this.onFocusInput();
    };

    _this.state = {
      isActive: false
    };
    return _this;
  }

  _createClass(InputComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          size = _props.size,
          success = _props.success,
          error = _props.error,
          neighboringInGroup = _props.neighboringInGroup,
          disabled = _props.disabled,
          leftIcon = _props.leftIcon,
          rightIcon = _props.rightIcon;

      return React.createElement(
        InputWrap,
        {
          size: size,
          active: this.state.isActive,
          neighboringInGroup: neighboringInGroup,
          disabled: disabled,
          rightIcon: rightIcon,
          leftIcon: leftIcon,
          positioDropdown: this.props.positioDropdown
        },
        React.createElement(
          'div',
          { onClick: this.onFocusInput },
          leftIcon
        ),
        React.createElement(Input, _extends({
          innerRef: function innerRef(input) {
            _this2.textInput = input;
          }
        }, this.props, {
          onFocus: this.onActionFocus,
          onBlur: this.onActionBlur
        })),
        (error || success) && React.createElement(InputLine, {
          success: success,
          error: error,
          className: 'input-line'
        }),
        error && React.createElement(
          Error,
          { error: true, size: size },
          error
        ),
        React.createElement(
          'div',
          { onClick: this.onFocusInput },
          rightIcon
        ),
        this.props.isDropdown !== undefined && React.createElement(
          BlockClick,
          { onClick: this.onClickIconDropdown },
          React.createElement(IconWrapper, {
            positioDropdown: this.props.positioDropdown,
            isActive: this.props.isDropdown,
            rightIcon: rightIcon,
            name: 'arrow-down',
            stroke: 'miscDark',
            fill: 'miscDark'
          })
        )
      );
    }
  }]);

  return InputComponent;
}(Component);

InputComponent.defaultProps = {
  error: '',
  success: false,
  size: '',
  disabled: false,
  placeholder: '',
  className: 'input',
  value: undefined,
  positionIcon: '',
  neighboringInGroup: '',
  rightIcon: null,
  leftIcon: null,
  isDropdown: undefined,
  onToggleDropdown: function onToggleDropdown() {},

  positioDropdown: ''
};

/* eslint-disable react/no-unused-prop-types */
InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.bool,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  positionIcon: PropTypes.string,
  neighboringInGroup: PropTypes.string,
  rightIcon: PropTypes.element,
  leftIcon: PropTypes.element,
  isDropdown: PropTypes.any,
  onToggleDropdown: PropTypes.func,
  positioDropdown: PropTypes.string
};

export default InputComponent;