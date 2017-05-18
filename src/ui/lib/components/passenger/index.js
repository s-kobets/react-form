'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('./styled');

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _index = require('../button/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PassangerPicker = function PassangerPicker(_ref) {
  var title = _ref.title,
      description = _ref.description,
      value = _ref.value,
      decrement = _ref.decrement,
      increment = _ref.increment,
      props = _objectWithoutProperties(_ref, ['title', 'description', 'value', 'decrement', 'increment']);

  return _react2.default.createElement(
    _styled.Passenger,
    props,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _styled.Title,
        null,
        title
      ),
      _react2.default.createElement(
        _styled.Description,
        null,
        description
      )
    ),
    _react2.default.createElement(
      _styled.PassangerCount,
      null,
      _react2.default.createElement(
        _styled.Current,
        null,
        value
      ),
      _react2.default.createElement(
        _styled.CountControls,
        null,
        _react2.default.createElement(
          _styled.CountControl,
          { className: 'control-min', isMax: props.isMax, isMin: props.isMin, onClick: decrement },
          _react2.default.createElement(_index2.default, { size: 'normal', icon: _react2.default.createElement(_icons2.default, {
              name: 'minus',
              stroke: 'background'
            }) })
        ),
        _react2.default.createElement(
          _styled.CountControl,
          { className: 'control-max', isMax: props.isMax, isMin: props.isMin, onClick: increment },
          _react2.default.createElement(_index2.default, { size: 'normal', icon: _react2.default.createElement(_icons2.default, {
              name: 'plus',
              stroke: 'background'
            }) })
        )
      )
    )
  );
};

PassangerPicker.defaultProps = {
  title: '',
  description: '',
  current: 0,
  disabled: '',
  decrement: null,
  increment: null,
  isMax: false,
  isMin: true
};

PassangerPicker.propTypes = {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  current: _propTypes2.default.number,
  disabled: _propTypes2.default.string,
  decrement: _propTypes2.default.func,
  increment: _propTypes2.default.func,
  isMin: _propTypes2.default.bool,
  isMax: _propTypes2.default.bool
};

exports.default = PassangerPicker;