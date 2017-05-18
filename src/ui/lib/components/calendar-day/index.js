'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */
var DayCell = function (_React$PureComponent) {
  _inherits(DayCell, _React$PureComponent);

  function DayCell() {
    _classCallCheck(this, DayCell);

    return _possibleConstructorReturn(this, (DayCell.__proto__ || Object.getPrototypeOf(DayCell)).apply(this, arguments));
  }

  _createClass(DayCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          day = _props.day,
          isCheap = _props.isCheap,
          cost = _props.cost;


      return _react2.default.createElement(
        _styled.Day,
        null,
        day.format('D'),
        cost && _react2.default.createElement(
          _styled.AvgCost,
          { isCheap: isCheap },
          cost.toLocaleString()
        )
      );
    }
  }]);

  return DayCell;
}(_react2.default.PureComponent);

exports.default = DayCell;