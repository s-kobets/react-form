'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  flex-direction: ', ';\n  align-items: flex-start;\n  user-select: none;\n'], ['\n  position: relative;\n  display: flex;\n  flex-direction: ', ';\n  align-items: flex-start;\n  user-select: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-bottom: 6px;\n  font-size: 14px;\n  line-height: 18px;\n  color: ', ';\n  user-select: none;\n'], ['\n  margin-bottom: 6px;\n  font-size: 14px;\n  line-height: 18px;\n  color: ', ';\n  user-select: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme-provider/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents2.default.label(_templateObject, function (props) {
  return props.horizonal ? 'row' : 'column';
});

var LabelText = _styledComponents2.default.span(_templateObject2, _theme.color.textDarker);

var LabelComponent = function LabelComponent(_ref) {
  var horizonal = _ref.horizonal,
      className = _ref.className,
      title = _ref.title;
  return _react2.default.createElement(
    Label,
    {
      horizonal: horizonal,
      className: className
    },
    _react2.default.createElement(
      LabelText,
      null,
      title
    )
  );
};

LabelComponent.defaultProps = {
  horizonal: false,
  title: '',
  className: 'label'
};

LabelComponent.propTypes = {
  title: _propTypes2.default.string,
  horizonal: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = LabelComponent;