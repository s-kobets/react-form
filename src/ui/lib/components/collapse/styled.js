'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrap = exports.PanelContent = exports.PanelHeader = exports.RcCollapseWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  .kb-collapse-content {\n    ', '\n  }\n\n  .kb-collapse-content.kb-collapse-content-inactive {\n    display: none;\n  }\n\n  .kb-collapse-item {\n    border-top: 1px solid ', ';\n    overflow: hidden;\n  }\n\n  .kb-collapse-item-active .icon {\n    transform: rotate(-180deg);\n  }\n'], ['\n  .kb-collapse-content {\n    ', '\n  }\n\n  .kb-collapse-content.kb-collapse-content-inactive {\n    display: none;\n  }\n\n  .kb-collapse-item {\n    border-top: 1px solid ', ';\n    overflow: hidden;\n  }\n\n  .kb-collapse-item-active .icon {\n    transform: rotate(-180deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  align-items: center;\n  display: flex;\n  padding: 18px;\n'], ['\n  ', '\n  align-items: center;\n  display: flex;\n  padding: 18px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 0 18px 24px;\n'], ['\n  padding: 0 18px 24px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin: 3px 0 0 3px;\n  transition-property: transform;\n'], ['\n  margin: 3px 0 0 3px;\n  transition-property: transform;\n']);

var _rcCollapse = require('rc-collapse');

var _rcCollapse2 = _interopRequireDefault(_rcCollapse);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('../../utils/link');

var _link2 = _interopRequireDefault(_link);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _transitions = require('../../utils/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RcCollapseWrapper = exports.RcCollapseWrapper = (0, _styledComponents2.default)(_rcCollapse2.default)(_templateObject, _transitions.switchTransition, function (_ref) {
  var theme = _ref.theme;
  return theme.color.miscLighter;
});

var PanelHeader = exports.PanelHeader = _styledComponents2.default.span(_templateObject2, _link2.default);

var PanelContent = exports.PanelContent = _styledComponents2.default.div(_templateObject3);

var IconWrap = exports.IconWrap = (0, _styledComponents2.default)(_icons2.default)(_templateObject4);