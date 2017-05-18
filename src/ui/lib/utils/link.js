'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    color: ', ';\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 20px;\n    text-decoration: none;\n    transition-property: color;\n\n    .icon-inherit-color {\n      fill: ', ';\n      stroke: ', ';\n    }\n\n    &:hover {\n      color: ', ';\n\n      .icon-inherit-color {\n        fill: ', ';\n        stroke: ', ';\n      }\n    }\n'], ['\n    ', '\n    color: ', ';\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 20px;\n    text-decoration: none;\n    transition-property: color;\n\n    .icon-inherit-color {\n      fill: ', ';\n      stroke: ', ';\n    }\n\n    &:hover {\n      color: ', ';\n\n      .icon-inherit-color {\n        fill: ', ';\n        stroke: ', ';\n      }\n    }\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _transitions = require('../utils/transitions');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getColor(props) {
  return props.theme.color.primaryDarkest;
}

function getHoverColor(props) {
  return (0, _polished.opacify)(-0.2, getColor(props));
}

var Link = (0, _styledComponents.css)(_templateObject, _transitions.switchTransition, getColor, getColor, getColor, getHoverColor, getHoverColor, getHoverColor);

exports.default = Link;