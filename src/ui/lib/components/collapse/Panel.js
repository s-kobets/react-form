'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  overflow: hidden;\n\n  .rc-collapse-content {\n    ', '\n  }\n\n  .rc-collapse-content.rc-collapse-content-inactive {\n    display: none;\n  }\n'], ['\n  overflow: hidden;\n\n  .rc-collapse-content {\n    ', '\n  }\n\n  .rc-collapse-content.rc-collapse-content-inactive {\n    display: none;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcCollapse = require('rc-collapse');

var _rcCollapse2 = _interopRequireDefault(_rcCollapse);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _transitions = require('../../utils/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable consistent-return */

var PanelStyled = (0, _styledComponents2.default)(_rcCollapse2.default.Panel)(_templateObject, _transitions.switchTransition);

var Panel = function Panel(props) {
  var header = props.header;

  var wrappedHeader = header;

  if (_react2.default.isValidElement(header)) {
    wrappedHeader = _react2.default.cloneElement(header, {
      isActive: props.isActive
    });
  }

  return _react2.default.createElement(PanelStyled, _extends({}, props, {
    header: wrappedHeader
  }));
};

Panel.propTypes = _rcCollapse2.default.Panel.propTypes;
Panel.defaultProps = {
  showArrow: false
};

exports.default = Panel;