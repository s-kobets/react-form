'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BUTTON_SIZE_TO_ICON_MAP = {
  small: 'xxsmall',
  normal: 'normal',
  large: 'normal'
};

var cloneIconWithSize = function cloneIconWithSize(iconNode, size) {
  return _react2.default.cloneElement(iconNode, {
    size: iconNode.props.size || BUTTON_SIZE_TO_ICON_MAP[size]
  });
};

var Button = function Button(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      size = _ref.size,
      icon = _ref.icon,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      props = _objectWithoutProperties(_ref, ['children', 'disabled', 'size', 'icon', 'leftIcon', 'rightIcon']);

  return _react2.default.createElement(
    _styled.StyledButton,
    _extends({}, props, {
      size: size,
      isIconOnly: Boolean(icon),
      hasLeftIcon: Boolean(leftIcon),
      hasRightIcon: Boolean(rightIcon),
      disabled: disabled,
      className: 'no-global'
    }),
    leftIcon ? _react2.default.createElement(
      _styled.IconWrap,
      { size: size, left: true },
      cloneIconWithSize(leftIcon, size)
    ) : null,
    icon ? _react2.default.createElement(
      _styled.IconWrap,
      { size: size },
      cloneIconWithSize(icon, size)
    ) : _react2.default.createElement(
      _styled.StyledButtonText,
      {
        size: size,
        hasLeftIcon: Boolean(leftIcon),
        hasRightIcon: Boolean(rightIcon)
      },
      children
    ),
    rightIcon ? _react2.default.createElement(
      _styled.IconWrap,
      { size: size, right: true },
      cloneIconWithSize(rightIcon, size)
    ) : null
  );
};

Button.defaultProps = {
  size: 'normal'
};

/* eslint-disable react/require-default-props */
Button.propTypes = {
  size: _propTypes2.default.oneOf(Object.keys(_styled.SIZES)),
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  icon: _propTypes2.default.element,
  leftIcon: _propTypes2.default.element,
  rightIcon: _propTypes2.default.element
};

exports.default = Button;