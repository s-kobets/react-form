'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: 6px;\n'], ['\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: 6px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styles = exports.styles = (0, _styledComponents.css)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.color.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.miscLighter;
});

var Box = _styledComponents2.default.div(_templateObject2, styles);

exports.default = Box;