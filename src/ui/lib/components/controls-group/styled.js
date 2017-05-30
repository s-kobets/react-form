var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n\n  &:hover .controls-group__swap {\n    opacity: 1;\n    transition: .001s linear .1s;\n  }\n'], ['\n  display: flex;\n\n  &:hover .controls-group__swap {\n    opacity: 1;\n    transition: .001s linear .1s;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  align-self: stretch;\n  width: 0;\n\n  cursor: pointer;\n\n  .icon-inherit-color {\n    fill: ', '\n  }\n\n  &:hover .icon-inherit-color {\n    fill: ', '\n  }\n'], ['\n  position: relative;\n  align-self: stretch;\n  width: 0;\n\n  cursor: pointer;\n\n  .icon-inherit-color {\n    fill: ', '\n  }\n\n  &:hover .icon-inherit-color {\n    fill: ', '\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  box-sizing: content-box;\n  width: 15px;\n  padding: 5px 0;\n\n  position: absolute;\n  left: -7.5px;\n  top: 50%;\n  margin-top: -12.5px;\n  z-index: 3;\n  transfrom: translateZ(0);\n\n  background: ', ';\n\n  opacity: 0;\n'], ['\n  box-sizing: content-box;\n  width: 15px;\n  padding: 5px 0;\n\n  position: absolute;\n  left: -7.5px;\n  top: 50%;\n  margin-top: -12.5px;\n  z-index: 3;\n  transfrom: translateZ(0);\n\n  background: ', ';\n\n  opacity: 0;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import { transparentize } from 'polished';
import Icon from '../icons';

var fadeGradient = function fadeGradient(_ref) {
  var theme = _ref.theme;
  return (
    /* eslint-disable prefer-template */
    'linear-gradient(' + '180deg, ' + transparentize(1, theme.color.background) + ' 0%, ' + theme.color.background + ' 15%, ' + theme.color.background + ' 85%, ' + transparentize(1, theme.color.background) + ' 100%' + ')'
  );
};

export var FlexContainer = styled.div(_templateObject);

export var SwapContainer = styled.div(_templateObject2, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.miscDark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.primary;
});

export var SwapIcon = styled(Icon)(_templateObject3, function (props) {
  return fadeGradient(props);
});