export default function sizeInput(size, SIZE, value, attr) {
  if (attr === 'height') {
    return SIZE[size] * 2 + value * 2 + 4 + 'px';
  }
  if (attr === 'padding') {
    return SIZE[size] + 'px';
  }
  return '\n      padding-left: ' + SIZE[size] + 'px\n      padding-right: ' + SIZE[size] + 'px\n      height: ' + (SIZE[size] * 2 + value * 2 + 4) + 'px\n    ';
}