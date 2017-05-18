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

var AirportSuggest = function (_React$PureComponent) {
  _inherits(AirportSuggest, _React$PureComponent);

  function AirportSuggest() {
    _classCallCheck(this, AirportSuggest);

    return _possibleConstructorReturn(this, (AirportSuggest.__proto__ || Object.getPrototypeOf(AirportSuggest)).apply(this, arguments));
  }

  _createClass(AirportSuggest, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          area = _props.area,
          isCity = _props.isCity,
          IATACode = _props.IATACode,
          isGeoSuggest = _props.isGeoSuggest;

      var isGeoCity = isCity && isGeoSuggest;
      var isAirport = !isCity;

      return _react2.default.createElement(
        _styled.AirportSuggestContainer,
        null,
        isGeoCity && isAirport && _react2.default.createElement(
          _styled.SuggestIcon,
          null,
          _react2.default.createElement(_icons2.default, { size: 'xxsmall', name: isGeoCity ? 'location' : 'plane', fill: 'miscDarker' })
        ),
        _react2.default.createElement(
          _styled.Geo,
          null,
          _react2.default.createElement(
            _styled.Value,
            null,
            value
          ),
          area && _react2.default.createElement(
            _styled.GeoLabel,
            null,
            ', ',
            area
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

  return AirportSuggest;
}(_react2.default.PureComponent);

AirportSuggest.propTypes = {
  value: _propTypes2.default.string.isRequired,
  area: _propTypes2.default.string.isRequired,
  IATACode: _propTypes2.default.string.isRequired,
  isCity: _propTypes2.default.bool.isRequired,
  isGeoSuggest: _propTypes2.default.bool.isRequired
};
AirportSuggest.defaultProps = {
  area: ''
};
exports.default = AirportSuggest;