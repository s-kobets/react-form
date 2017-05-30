var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PropTypes } from 'react';
import { SwapContainer, SwapIcon, FlexContainer } from './styled';

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_controlsGroupProps', {
  value: require('react').PropTypes.shape({
    neighboringInGroup: require('prop-types').oneOf(['right', 'both', 'left'])
  })
});


var getNeighboringInGroup = function getNeighboringInGroup(index, length) {
  if (index === 0) {
    return 'right';
  }
  if (index === length - 1) {
    return 'left';
  }

  return 'both';
};

var Swap = function (_React$Component) {
  _inherits(Swap, _React$Component);

  function Swap() {
    _classCallCheck(this, Swap);

    return _possibleConstructorReturn(this, (Swap.__proto__ || Object.getPrototypeOf(Swap)).apply(this, arguments));
  }

  _createClass(Swap, [{
    key: 'render',
    value: function render() {
      var onSwap = this.props.onSwap;


      return React.createElement(
        SwapContainer,
        {
          onClick: onSwap
        },
        React.createElement(SwapIcon, {
          className: 'controls-group__swap',
          name: 'left-right',
          size: 'xxsmall',
          inheritColor: true
        })
      );
    }
  }]);

  return Swap;
}(React.Component);

Swap.propTypes = {
  onSwap: PropTypes.func
};
Swap.defaultProps = {
  onSwap: null
};


var ControlsGroup = function ControlsGroup(_ref) {
  var children = _ref.children,
      onSwap = _ref.onSwap,
      props = _objectWithoutProperties(_ref, ['children', 'onSwap']);

  if (!children.length || children.length === 1) {
    return children;
  }

  var controls = children;
  if (children.length === 2 && onSwap) {
    controls = [children[0], React.createElement(Swap, { onSwap: onSwap }), children[1]];
  }

  return React.createElement(
    FlexContainer,
    props,
    React.Children.toArray(controls.map(function (child, index, _ref2) {
      var length = _ref2.length;
      return React.cloneElement(child, {
        neighboringInGroup: getNeighboringInGroup(index, length)
      });
    }))
  );
};

ControlsGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSwap: PropTypes.func
};

ControlsGroup.defaultProps = {
  onSwap: null
};

export default ControlsGroup;