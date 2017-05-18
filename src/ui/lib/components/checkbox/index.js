'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          disabled = _props.disabled,
          onChange = _props.onChange,
          children = _props.children,
          name = _props.name,
          className = _props.className;


      return _react2.default.createElement(
        _styled.CheckboxLabel,
        { disabled: disabled, className: className },
        _react2.default.createElement(
          _styled.StyledCheckbox,
          {
            className: 'checkbox',
            disabled: disabled,
            checked: checked
          },
          checked ? _react2.default.createElement(
            _styled.IconWrap,
            { checked: checked },
            _react2.default.createElement(_icons2.default, { name: 'checkbox', fill: 'background' })
          ) : null,
          _react2.default.createElement(_styled.CheckboxInput, {
            type: 'checkbox',
            checked: checked,
            onChange: onChange,
            disabled: disabled,
            name: name
          })
        ),
        _react2.default.createElement(
          _styled.LabelText,
          { className: 'label-text', disabled: disabled },
          children
        )
      );
    }
  }]);

  return Checkbox;
}(_react.PureComponent);

Checkbox.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  checked: _propTypes2.default.bool.isRequired,
  disabled: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  name: _propTypes2.default.string,
  className: _propTypes2.default.string
};
Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  onChange: function onChange() {},

  name: '',
  className: ''
};
exports.default = Checkbox;