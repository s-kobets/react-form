"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var common = exports.common = "\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n";

var button = exports.button = "\n  border: none;\n  outline: none;\n";

// For `ol` and `ul`
var list = exports.list = "\n  list-style: none;\n";

// For `blockquote` and `q`
var quote = exports.quote = "\n  quotes: none;\n  &:before, &:after {\n      content: '';\n      content: none;\n  }\n";

var table = exports.table = "\n  border-collapse: collapse;\n  border-spacing: 0;\n\n  table, caption, tbody, tfoot, thead, tr, th, td {\n    " + common + "\n  }\n";