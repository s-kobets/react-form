'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizeInput;
function sizeInput(size, SIZE, customNumber, attr) {
  if (attr === 'height') {
    return '' + (SIZE[size] * 2 + customNumber * 2);
  }
  if (attr === 'padding') {
    return '' + SIZE[size];
  }
  return '\n      padding-left: ' + SIZE[size] + 'px\n      padding-right: ' + SIZE[size] + 'px\n      height: ' + (SIZE[size] * 2 + customNumber * 2) + 'px\n    ';
}