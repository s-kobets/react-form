'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleFluidSection = exports.Aside = exports.FluidSection = exports.FluidContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n\n  @media(min-width: 1000px) {\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  @media(min-width: 1200px) {\n    width: 1164px;\n    margin: 0 auto;\n  }\n'], ['\n  margin: 0 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n\n  @media(min-width: 1000px) {\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  @media(min-width: 1200px) {\n    width: 1164px;\n    margin: 0 auto;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex-grow: 1;\n\n  @media(min-width: 1200px) {\n    max-width: 870px;\n  }\n'], ['\n  flex-grow: 1;\n\n  @media(min-width: 1200px) {\n    max-width: 870px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  flex-grow: 0;\n  flex-shrink: 0;\n\n  @media(min-width: 1000px) {\n    width: 252px;\n    margin-left: 18px;\n  }\n\n  @media(min-width: 1200px) {\n    margin-left: 42px;\n  }\n'], ['\n  width: 100%;\n  flex-grow: 0;\n  flex-shrink: 0;\n\n  @media(min-width: 1000px) {\n    width: 252px;\n    margin-left: 18px;\n  }\n\n  @media(min-width: 1200px) {\n    margin-left: 42px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin: 0 18px;\n  max-width: 966px;\n\n  @media(min-width: 1002px) {\n    margin: 0 auto;\n  }\n'], ['\n  margin: 0 18px;\n  max-width: 966px;\n\n  @media(min-width: 1002px) {\n    margin: 0 auto;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FluidContainer = _styledComponents2.default.div(_templateObject);
FluidContainer.displayName = 'FluidContainer';

var FluidSection = _styledComponents2.default.div(_templateObject2);
FluidSection.displayName = 'FluidSection';

var Aside = _styledComponents2.default.div(_templateObject3);
Aside.displayName = 'Aside';

var SingleFluidSection = _styledComponents2.default.div(_templateObject4);
SingleFluidSection.displayName = 'SingleFluidSection';

exports.FluidContainer = FluidContainer;
exports.FluidSection = FluidSection;
exports.Aside = Aside;
exports.SingleFluidSection = SingleFluidSection;