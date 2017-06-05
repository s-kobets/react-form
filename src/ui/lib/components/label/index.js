var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-flex;\n  flex-direction: ', ';\n  align-items: flex-start;\n  user-select: none;\n'], ['\n  position: relative;\n  display: inline-flex;\n  flex-direction: ', ';\n  align-items: flex-start;\n  user-select: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-bottom: 6px;\n  font-size: 14px;\n  line-height: 18px;\n  color: ', ';\n  user-select: none;\n'], ['\n  margin-bottom: 6px;\n  font-size: 14px;\n  line-height: 18px;\n  color: ', ';\n  user-select: none;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../theme-provider/theme';

var Label = styled.label(_templateObject, function (props) {
  return props.horizonal ? 'row' : 'column';
});

var LabelText = styled.span(_templateObject2, color.textDarker);

var LabelComponent = function LabelComponent(_ref) {
  var children = _ref.children,
      horizonal = _ref.horizonal,
      className = _ref.className,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ['children', 'horizonal', 'className', 'title']);

  return React.createElement(
    Label,
    _extends({}, props, {
      horizonal: horizonal,
      className: className
    }),
    React.createElement(
      LabelText,
      null,
      title
    ),
    children
  );
};

LabelComponent.defaultProps = {
  horizonal: false,
  title: '',
  className: 'label',
  children: undefined
};

LabelComponent.propTypes = {
  title: PropTypes.string,
  horizonal: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element
};

export default LabelComponent;