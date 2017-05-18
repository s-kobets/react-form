'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding-left: 18px;\n  padding-right: 18px;\n'], ['\n  padding-left: 18px;\n  padding-right: 18px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  padding-top: 18px;\n  padding-bottom: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n'], ['\n  ', '\n  padding-top: 18px;\n  padding-bottom: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  padding-bottom: 24px;\n'], ['\n  ', '\n  padding-bottom: 24px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding-left: 19px;\n'], ['\n  padding-left: 19px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  align-items: center;\n  display: flex;\n  padding-top: 12px;\n  padding-bottom: 12px;\n'], ['\n  ', '\n  ', '\n  align-items: center;\n  display: flex;\n  padding-top: 12px;\n  padding-bottom: 12px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  margin: 3px 0 0 3px;\n  transition-property: transform;\n\n  ', '\n'], ['\n  margin: 3px 0 0 3px;\n  transition-property: transform;\n\n  ', '\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  margin: 0 -1px;\n  border-top: 1px solid ', ';\n'], ['\n  margin: 0 -1px;\n  border-top: 1px solid ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _box = require('../../components/box');

var _collapse = require('../../components/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _icons = require('../../components/icons');

var _icons2 = _interopRequireDefault(_icons);

var _link = require('../../utils/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable consistent-return, arrow-body-style */

var Section = _styledComponents2.default.section(_templateObject, _box.styles);

var horizontalPadding = (0, _styledComponents.css)(_templateObject2);

var Header = _styledComponents2.default.header(_templateObject3, horizontalPadding);
var Content = _styledComponents2.default.div(_templateObject4, horizontalPadding);

var PanelContent = (0, _styledComponents2.default)(Content)(_templateObject5);

var PanelHeader = _styledComponents2.default.div(_templateObject6, _link2.default, horizontalPadding);

var IconWrapper = (0, _styledComponents2.default)(_icons2.default)(_templateObject7, function (_ref) {
  var isActive = _ref.isActive;

  if (isActive) {
    return '\n        transform: rotate(-180deg);\n      ';
  }
});

var PanelWrapper = (0, _styledComponents2.default)(_collapse2.default.Panel)(_templateObject8, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.miscLighter;
});

var Panel = function Panel(props) {
  return _react2.default.createElement(
    PanelWrapper,
    _extends({}, props, {
      header: _react2.default.createElement(
        PanelHeaderWrapper,
        null,
        props.title
      )
    }),
    _react2.default.createElement(
      PanelContent,
      null,
      props.children
    )
  );
};

Panel.propTypes = _extends({}, _collapse2.default.Panel.PropTypes, {
  title: _propTypes2.default.node.isRequired
});

var PanelHeaderWrapper = function PanelHeaderWrapper(props) {
  return _react2.default.createElement(
    PanelHeader,
    null,
    props.children,
    _react2.default.createElement(IconWrapper, {
      name: 'arrow-down',
      size: 'xxsmall',
      isActive: props.isActive,
      inheritColor: true
    })
  );
};

PanelHeaderWrapper.propTypes = {
  children: _propTypes2.default.node.isRequired,
  isActive: _propTypes2.default.bool
};

PanelHeaderWrapper.defaultProps = {
  isActive: false
};

var FilterBox = function FilterBox(props) {
  return _react2.default.createElement(
    Section,
    { className: props.className },
    _react2.default.createElement(
      Header,
      null,
      props.headerLeft,
      props.headerRight
    ),
    !!props.content && _react2.default.createElement(
      Content,
      null,
      props.content
    ),
    props.collapse
  );
};

FilterBox.propTypes = {
  headerLeft: _propTypes2.default.node.isRequired,
  headerRight: _propTypes2.default.node.isRequired,
  content: _propTypes2.default.node.isRequired,
  collapse: _propTypes2.default.node,
  className: _propTypes2.default.string
};

FilterBox.defaultProps = {
  collapse: null,
  className: ''
};

FilterBox.Collapse = _collapse2.default;
FilterBox.Panel = Panel;

exports.default = FilterBox;