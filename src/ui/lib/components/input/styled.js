var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  user-select: none;\n'], ['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  user-select: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-bottom: 6px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #333333;\n  user-select: none;\n'], ['\n  margin-bottom: 6px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #333333;\n  user-select: none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: ', '\n    height: 100%;\n    width: 2px;\n    border-radius: 3px 0 0 3px;\n    background-color: ', '\n  }\n'], ['\n  position: relative;\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: ', '\n    height: 100%;\n    width: 2px;\n    border-radius: 3px 0 0 3px;\n    background-color: ', '\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 0;\n    display: ', '\n    padding-top: 3px;\n    padding-bottom: 5px;\n    padding-left: ', 'px;\n    width: ', ';\n    font-size: 14px;\n    line-height: 16px;\n    color: #FFFFFF;\n    border-radius: 3px;\n    background-color: #E64926;\n    opacity: 0.97;\n    z-index: 2;\n'], ['\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 0;\n    display: ', '\n    padding-top: 3px;\n    padding-bottom: 5px;\n    padding-left: ', 'px;\n    width: ', ';\n    font-size: 14px;\n    line-height: 16px;\n    color: #FFFFFF;\n    border-radius: 3px;\n    background-color: #E64926;\n    opacity: 0.97;\n    z-index: 2;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding-left: ', 'px;\n  padding-right: ', 'px;\n  height: ', 'px;\n  width: 280px;\n  font-size: ', 'px;\n  color: #333333;\n  border: 1px solid #B1BDCC;\n  border-radius: 3px;\n  background-color: #FFFFFF;\n  box-sizing: border-box;\n  cursor: text;\n\n  &::placeholder {\n    color: #96A0B3;\n  }\n\n  &:hover {\n    border-color: #38AFFF;\n  }\n\n  &:active {\n    margin: -1px 0;\n    height: ', 'px;\n    border: 2px solid #38AFFF;\n  }\n\n  &:disabled {\n    background-color: #F0F5FA;\n    border: 1px solid #F0F5FA;\n\n    &:hover {\n      border-color: #F0F5FA;\n    }\n\n    &::placeholder {\n      color: #B1BDCC;\n    }\n  }\n'], ['\n  padding-left: ', 'px;\n  padding-right: ', 'px;\n  height: ', 'px;\n  width: 280px;\n  font-size: ', 'px;\n  color: #333333;\n  border: 1px solid #B1BDCC;\n  border-radius: 3px;\n  background-color: #FFFFFF;\n  box-sizing: border-box;\n  cursor: text;\n\n  &::placeholder {\n    color: #96A0B3;\n  }\n\n  &:hover {\n    border-color: #38AFFF;\n  }\n\n  &:active {\n    margin: -1px 0;\n    height: ', 'px;\n    border: 2px solid #38AFFF;\n  }\n\n  &:disabled {\n    background-color: #F0F5FA;\n    border: 1px solid #F0F5FA;\n\n    &:hover {\n      border-color: #F0F5FA;\n    }\n\n    &::placeholder {\n      color: #B1BDCC;\n    }\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: calc(50% - 9px);\n  right: 10px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1px solid #B1BDCC;\n  background-color: #FFFFFF;\n'], ['\n  position: absolute;\n  top: calc(50% - 9px);\n  right: 10px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1px solid #B1BDCC;\n  background-color: #FFFFFF;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
// import Icon from '../icons'

var PADDING = {
  large: 15,
  normal: 12,
  small: 9
};

var HEIGHT = {
  large: 42,
  normal: 36,
  small: 30
};

var TYPOGRAPHY = {
  large: 18,
  normal: 16,
  small: 16
};

// const MARGIN_RIGHT = {
//   large: 10,
//   normal: 7,
//   small: 7,
// }

export var StyledLabel = styled.label(_templateObject);

export var StyledSpan = styled.span(_templateObject2);

export var StyledInputSpan = styled.span(_templateObject3, function (props) {
  return props.success || props.error ? 'block' : 'none';
}, function (props) {
  return props.error ? '#E64926' : '#23C256';
});

export var StyledInputSpanError = styled.span(_templateObject4, function (props) {
  return props.error ? 'block' : 'none';
}, PADDING.normal, function (_ref) {
  var size = _ref.size;
  return size === 'small' ? '100%' : '181px';
});

export var StyledInput = styled.input(_templateObject5, function (_ref2) {
  var size = _ref2.size;
  return PADDING[size];
}, function (_ref3) {
  var size = _ref3.size;
  return PADDING[size];
}, function (_ref4) {
  var size = _ref4.size;
  return HEIGHT[size];
}, function (_ref5) {
  var size = _ref5.size;
  return TYPOGRAPHY[size];
}, function (_ref6) {
  var size = _ref6.size;
  return HEIGHT[size] + 2;
});

export var IconQuestion = styled.span(_templateObject6);