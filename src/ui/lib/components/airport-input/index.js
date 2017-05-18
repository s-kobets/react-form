'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */
var AirportInput = function (_React$PureComponent) {
  _inherits(AirportInput, _React$PureComponent);

  function AirportInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AirportInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AirportInput.__proto__ || Object.getPrototypeOf(AirportInput)).call.apply(_ref, [this].concat(args))), _this), _this.input = null, _this.state = {
      focused: false
    }, _this.onFocus = function (e) {
      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
      _this.setState({ focused: true });
      e.target.select();
    }, _this.onBlur = function (e) {
      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
      _this.setState({ focused: false });
    }, _this.focus = function () {
      if (_this.input) {
        _this.input.focus();
      }
    }, _this.onRef = function (ref) {
      /* eslint-disable react/no-find-dom-node */
      _this.input = ref && _reactDom2.default.findDOMNode(ref);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /* eslint-disable react/sort-comp */

  /* eslint-enable react/sort-comp */

  _createClass(AirportInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          neighboringInGroup = _props.neighboringInGroup,
          value = _props.value,
          location = _props.location,
          IATACode = _props.IATACode,
          _props$meta = _props.meta,
          meta = _props$meta === undefined ? {} : _props$meta,
          props = _objectWithoutProperties(_props, ['neighboringInGroup', 'value', 'location', 'IATACode', 'meta']);

      var hasError = meta && meta.error;
      var touched = meta.touched;
      var focused = this.state.focused;
      var spell = this.props.spell;

      if (spell.toLowerCase().indexOf(value.toLowerCase()) === 0) {
        spell = spell.substr(value.length);
      } else {
        spell = '';
      }

      return _react2.default.createElement(
        _styled.Container,
        {
          neighboringInGroup: neighboringInGroup,
          focused: focused,
          hasError: touched && hasError
        },
        _react2.default.createElement(_styled.Input, _extends({}, props, {
          ref: this.onRef,
          value: value,
          onFocus: this.onFocus,
          onBlur: this.onBlur
        })),
        _react2.default.createElement(
          _styled.Geo,
          { className: 'airport-input__geo' },
          _react2.default.createElement(
            _styled.ValuePlaceholder,
            null,
            value
          ),
          value && spell && _react2.default.createElement(_styled.Spell, { className: 'airport-input__spell', value: spell, readOnly: true }),
          location && _react2.default.createElement(
            _styled.GeoLabel,
            null,
            ', ',
            location
          )
        ),
        _react2.default.createElement(
          _styled.Code,
          null,
          IATACode
        )
      );
    }
  }]);

  return AirportInput;
}(_react2.default.PureComponent);

AirportInput.defaultProps = {
  location: '',
  spell: '',
  IATACode: '',
  onFocus: null,
  onBlur: null,
  neighboringInGroup: null
};
AirportInput.propTypes = {
  value: require('prop-types').string.isRequired,
  location: require('prop-types').string.isRequired,
  spell: require('prop-types').string.isRequired,
  IATACode: require('prop-types').string.isRequired,
  onFocus: require('prop-types').func.isRequired,
  onBlur: require('prop-types').func.isRequired,
  neighboringInGroup: require('prop-types').oneOf(['left', 'right', 'both']),
  meta: require('prop-types').shape({
    error: require('prop-types').string,
    touched: require('prop-types').bool.isRequired
  })
};
exports.default = AirportInput;