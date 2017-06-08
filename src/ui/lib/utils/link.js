var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    color: ', ';\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 20px;\n    text-decoration: none;\n    transition-property: color;\n\n    .icon-inherit-color {\n      fill: ', ';\n      stroke: ', ';\n    }\n\n    &:hover {\n      color: ', ';\n\n      .icon-inherit-color {\n        fill: ', ';\n        stroke: ', ';\n      }\n    }\n'], ['\n    ', '\n    color: ', ';\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 20px;\n    text-decoration: none;\n    transition-property: color;\n\n    .icon-inherit-color {\n      fill: ', ';\n      stroke: ', ';\n    }\n\n    &:hover {\n      color: ', ';\n\n      .icon-inherit-color {\n        fill: ', ';\n        stroke: ', ';\n      }\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
import { opacify } from 'polished';

import { switchTransition } from '../utils/transitions';

function getColor(props) {
  return props.theme.color.primaryDarkest;
}

function getHoverColor(props) {
  return opacify(-0.2, getColor(props));
}

var Link = css(_templateObject, switchTransition, getColor, getColor, getColor, getHoverColor, getHoverColor, getHoverColor);

export default Link;