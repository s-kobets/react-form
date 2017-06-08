var _templateObject = _taggedTemplateLiteral(['\n    &:after {\n      ', ': 100%;\n    \ttop: 50%;\n      height: 0;\n      width: 0;\n      position: absolute;\n      border: solid ', 'px transparent;\n      content: " ";\n      pointer-events: none;\n      border-', '-color: ', ';\n      border-', '-width: ', 'px;\n      margin-top: -', 'px;\n    }\n  '], ['\n    &:after {\n      ', ': 100%;\n    \ttop: 50%;\n      height: 0;\n      width: 0;\n      position: absolute;\n      border: solid ', 'px transparent;\n      content: " ";\n      pointer-events: none;\n      border-', '-color: ', ';\n      border-', '-width: ', 'px;\n      margin-top: -', 'px;\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

export default function cssArrow(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? '#FFF' : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 4 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 8 : _ref$height,
      _ref$fromDirection = _ref.fromDirection,
      fromDirection = _ref$fromDirection === undefined ? 'left' : _ref$fromDirection;

  return css(_templateObject, fromDirection, height / 2, fromDirection, color, fromDirection, width, height / 2);
}