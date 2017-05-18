'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DateRangePicker = require('@kupibilet/react-dates/lib/components/DateRangePicker');

var _DateRangePicker2 = _interopRequireDefault(_DateRangePicker);

var _constants = require('@kupibilet/react-dates/constants');

var consts = _interopRequireWildcard(_constants);

var _styled = require('./styled');

var _styled2 = _interopRequireDefault(_styled);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarNav = function CalendarNav(_ref) {
  var direction = _ref.direction;
  return _react2.default.createElement(_button2.default, {
    icon: _react2.default.createElement(_icons2.default, { name: 'arrow-' + direction, stroke: 'background' })
  });
};
CalendarNav.defaultProps = {
  direction: 'left'
};
CalendarNav.propTypes = {
  direction: _propTypes2.default.oneOf(['left', 'right'])
};

/* eslint-disable react/prop-types */

var DateRangePickerWrapper = function (_React$PureComponent) {
  _inherits(DateRangePickerWrapper, _React$PureComponent);

  function DateRangePickerWrapper() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, DateRangePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = DateRangePickerWrapper.__proto__ || Object.getPrototypeOf(DateRangePickerWrapper)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      focusedInput: null,
      hoveredDate: null
    }, _this.onDayHover = function (day) {
      _this.setState({
        hoveredDate: day
      });
    }, _this.modifiers = {
      // Needed to invert arrow direction of the hovered day
      beforeStart: function beforeStart(day) {
        return day.isBefore(_this.state.startDate, 'day');
      }
    }, _this.renderInputText = function (day, format, inputReference) {
      var _this$props = _this.props,
          startDate = _this$props.startDate,
          focusedInput = _this$props.focusedInput,
          endDate = _this$props.endDate;
      var hoveredDate = _this.state.hoveredDate;

      var isStartDateInput = inputReference === consts.START_DATE;

      if (hoveredDate && !day.isSame(hoveredDate)) {
        // When picking endDate but hovered date are before picked startDate
        // and click will pick startDate instead of focuesd endDate
        if (focusedInput === consts.END_DATE && hoveredDate.isBefore(startDate, 'day')) {
          if (isStartDateInput) {
            return hoveredDate.format(_this.getDisplayFormat());
          }
          return endDate.format(_this.getDisplayFormat());
        }

        if (focusedInput === consts.START_DATE && isStartDateInput || focusedInput === consts.END_DATE && !isStartDateInput) {
          return hoveredDate.format(_this.getDisplayFormat());
        }
      }

      if (_this.props.renderInputText) {
        return _this.props.renderInputText(day, format);
      }
      return day.format(format);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateRangePickerWrapper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.focusedInput !== this.props.focusedInput) {
        this.setState({
          hoveredDate: null
        });
      }
    }
  }, {
    key: 'getDisplayFormat',
    value: function getDisplayFormat() {
      var displayFormat = this.props.displayFormat;

      return typeof displayFormat === 'string' ? displayFormat : displayFormat();
    }

    // Render values as placeholder emulation when dates already picked
    // but DayPicker calendar opens again

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          startDate = _props.startDate,
          focusedInput = _props.focusedInput,
          endDate = _props.endDate;
      var hoveredDate = this.state.hoveredDate;

      var startDatePlaceholder = hoveredDate && focusedInput === consts.START_DATE ? hoveredDate.format(this.getDisplayFormat()) : this.props.startDatePlaceholderText;
      var endDatePlaceholder = hoveredDate && focusedInput === consts.END_DATE && (!startDate || hoveredDate.isAfter(startDate, 'day')) ? hoveredDate.format(this.getDisplayFormat()) : this.props.endDatePlaceholderText;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)({
            'DateInput--startDate--focused': focusedInput === consts.START_DATE,
            'DateInput--startDate--placeholder': !startDate || hoveredDate && (focusedInput === consts.START_DATE && !hoveredDate.isSame(startDate, 'day') || focusedInput === consts.END_DATE && hoveredDate.isBefore(startDate, 'day')),
            'DateInput--endDate--focused': focusedInput === consts.END_DATE,
            'DateInput--endDate--placeholder': !endDate || hoveredDate && focusedInput === consts.END_DATE && !hoveredDate.isSame(endDate, 'day') && hoveredDate.isAfter(startDate, 'day')
          })
        },
        _react2.default.createElement(_DateRangePicker2.default, _extends({}, this.props, {
          minimumNights: 0,
          onDayHover: this.onDayHover,
          modifiers: this.modifiers,
          renderInputText: this.renderInputText,
          startDatePlaceholderText: startDatePlaceholder,
          endDatePlaceholderText: endDatePlaceholder,
          customArrowIcon: _react2.default.createElement('span', null),
          navPrev: _react2.default.createElement(CalendarNav, null),
          navNext: _react2.default.createElement(CalendarNav, { direction: 'right' })
        }))
      );
    }
  }]);

  return DateRangePickerWrapper;
}(_react2.default.PureComponent);

var DateRange = function DateRange(props) {
  var dimensions = _extends({}, DateRange.defaultProps.dimensions, props.dimensions);

  return _react2.default.createElement(
    _styled2.default,
    { dimensions: dimensions },
    _react2.default.createElement(DateRangePickerWrapper, _extends({}, props, { dimensions: dimensions }))
  );
};

DateRange.defaultProps = _extends({}, _DateRangePicker2.default.defaultProps, {
  startDatePlaceholderText: 'Туда',
  endDatePlaceholderText: 'Обратно',
  displayFormat: function displayFormat() {
    return 'DD MMM';
  },
  monthFormat: 'MMMM YYYY',
  anchorDirection: consts.ANCHOR_RIGHT,
  dimensions: {
    calendarMonthWidth: 320,
    dayPickerPadding: 9,
    monthPadding: 23,
    dayPickerWidth: 340,
    inputWidth: 109
  }
});

DateRange.propTypes = _extends({}, _DateRangePicker2.default.propTypes, {
  children: _propTypes2.default.node,
  onDatesChange: _propTypes2.default.func.isRequired
});

Object.assign(DateRange, consts);

exports.default = DateRange;