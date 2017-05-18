'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px 13px;\n  min-height: 66px;\n  width: 180px;\n  border: 1px solid ', ';\n  border-radius: 3px;\n  background-color: #FFFFFF;\n  cursor: pointer;\n  ', ';\n  transition-property: border-color, box-shadow;\n  box-sizing: border-box;\n'], ['\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px 13px;\n  min-height: 66px;\n  width: 180px;\n  border: 1px solid ', ';\n  border-radius: 3px;\n  background-color: #FFFFFF;\n  cursor: pointer;\n  ', ';\n  transition-property: border-color, box-shadow;\n  box-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  flex-direction: column;\n\n  & + & {\n    margin-left: 10px;\n  }\n\n  &:hover .input-check {\n    border-color: ', ';\n    box-shadow: 0 0 0 1px ', ';\n  }\n'], ['\n  display: inline-flex;\n  flex-direction: column;\n\n  & + & {\n    margin-left: 10px;\n  }\n\n  &:hover .input-check {\n    border-color: ', ';\n    box-shadow: 0 0 0 1px ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: none;\n\n  &:checked + .input-check {\n    border-color: ', ';\n    box-shadow: 0 0 0 1px ', ';\n  }\n'], ['\n  display: none;\n\n  &:checked + .input-check {\n    border-color: ', ';\n    box-shadow: 0 0 0 1px ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  align-items: ', ';\n  margin-top: ', 'px;\n\n  & .input-check-icon {\n    & + .block-icon {\n      margin-left: 6px;\n    }\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: ', ';\n  margin-top: ', 'px;\n\n  & .input-check-icon {\n    & + .block-icon {\n      margin-left: 6px;\n    }\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  color: ', ';\n'], ['\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  color: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  color: ', ';\n'], ['\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  color: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 16px;\n  color: #7F7F7F;\n'], ['\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 16px;\n  color: #7F7F7F;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _theme = require('../theme-provider/theme');

var _transitions = require('../../utils/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputWrapper = _styledComponents2.default.div(_templateObject, _theme.color.misc, _transitions.switchTransition);

var Label = _styledComponents2.default.label(_templateObject2, _theme.color.primary, _theme.color.primary);

var HiddenInput = _styledComponents2.default.input(_templateObject3, _theme.color.primary, _theme.color.primary);

var ContentWrapper = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.bottomLine ? 'center' : 'flex-start';
}, function (props) {
  return props.bottomLine && 6;
});

var Title = _styledComponents2.default.span(_templateObject5, _theme.color.textDarker);

var Price = _styledComponents2.default.span(_templateObject6, _theme.color.secondaryDarker);

var Description = _styledComponents2.default.span(_templateObject7);

var BlockChecked = function BlockChecked(_ref) {
  var htmlFor = _ref.htmlFor,
      name = _ref.name,
      title = _ref.title,
      price = _ref.price,
      iconsPosition = _ref.iconsPosition,
      icons = _ref.icons,
      props = _objectWithoutProperties(_ref, ['htmlFor', 'name', 'title', 'price', 'iconsPosition', 'icons']);

  return _react2.default.createElement(
    Label,
    _extends({
      htmlFor: htmlFor
    }, props),
    _react2.default.createElement(HiddenInput, {
      type: 'radio',
      id: htmlFor,
      name: name,
      value: props.value
    }),
    _react2.default.createElement(
      InputWrapper,
      { className: 'input-check' },
      _react2.default.createElement(
        ContentWrapper,
        null,
        _react2.default.createElement(
          Title,
          null,
          title
        ),
        icons.length > 0 && iconsPosition === 'top' && _react2.default.createElement(
          ContentWrapper,
          null,
          icons.map(function (item, index) {
            return _react2.default.createElement(_icons2.default, {
              className: 'input-check-icon',
              key: item.concat(index),
              name: item,
              stroke: 'background',
              fill: 'miscDark'
            });
          })
        )
      ),
      _react2.default.createElement(
        ContentWrapper,
        { bottomLine: true },
        _react2.default.createElement(
          Price,
          null,
          price
        ),
        icons.length > 0 && iconsPosition === 'bottom' && _react2.default.createElement(
          ContentWrapper,
          null,
          icons.map(function (item) {
            return _react2.default.createElement(_icons2.default, {
              className: 'block-icon',
              key: item,
              name: item,
              stroke: 'background',
              fill: 'miscDark'
            });
          })
        )
      )
    ),
    props.description && _react2.default.createElement(
      Description,
      null,
      props.description
    )
  );
};

BlockChecked.defaultProps = {
  title: '',
  price: '',
  icons: [],
  iconsPosition: 'bottom',
  value: '',
  description: ''
};

BlockChecked.propTypes = {
  htmlFor: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string,
  price: _react.PropTypes.string,
  icons: _react.PropTypes.array,
  iconsPosition: _react.PropTypes.string,
  value: _react.PropTypes.string,
  description: _react.PropTypes.string
};

exports.default = BlockChecked;