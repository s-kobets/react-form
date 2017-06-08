export var common = "\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n";

export var control = "\n  font-family: inherit;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n";

// For `ol` and `ul`
export var list = "\n  list-style: none;\n";

// For `blockquote` and `q`
export var quote = "\n  quotes: none;\n  &:before, &:after {\n      content: '';\n      content: none;\n  }\n";

export var table = "\n  border-collapse: collapse;\n  border-spacing: 0;\n\n  table, caption, tbody, tfoot, thead, tr, th, td {\n    " + common + "\n  }\n";