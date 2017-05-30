export var PADDING = {
  large: 15,
  normal: 12,
  small: 9
};

export var TYPOGRAPHY = {
  large: 18,
  normal: 16,
  small: 16
};

var arr = [];
var element = void 0;
// eslint-disable-next-line
for (element in PADDING) {
  arr.push(PADDING[element]);
}

var customNumber = arr.reduce(function (x, y) {
  return Math.abs(x - y);
});

export function calculate(size) {
  return PADDING[size] * 2 + customNumber * 2;
}