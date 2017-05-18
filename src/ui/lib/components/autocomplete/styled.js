'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .react-autosuggest__container {\n    position: relative;\n  }\n  .react-autosuggest__container--open {}\n  .react-autosuggest__input {\n    appearance: none;\n\n    &::-ms-clear,\n    &::-webkit-search-cancel-button {\n      display: none;\n    }\n  }\n  .react-autosuggest__input--open {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .react-autosuggest__input--focused {\n    outline: none;\n  }\n  .react-autosuggest__suggestions-container {\n    display: none;\n  }\n  .react-autosuggest__suggestions-container--open {\n    display: block;\n    position: relative;\n    top: -1px;\n  }\n  .react-autosuggest__suggestions-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-width: 320px;\n    max-width: 540px;\n    ', '\n    ', '\n    z-index: 2;\n  }\n  .react-autosuggest__suggestion {\n    cursor: pointer;\n  }\n  .react-autosuggest__suggestion--first {}\n  .react-autosuggest__suggestion--highlighted {}\n  .react-autosuggest__section-container {}\n  .react-autosuggest__section-container--first {}\n  .react-autosuggest__section-title {}\n'], ['\n  .react-autosuggest__container {\n    position: relative;\n  }\n  .react-autosuggest__container--open {}\n  .react-autosuggest__input {\n    appearance: none;\n\n    &::-ms-clear,\n    &::-webkit-search-cancel-button {\n      display: none;\n    }\n  }\n  .react-autosuggest__input--open {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .react-autosuggest__input--focused {\n    outline: none;\n  }\n  .react-autosuggest__suggestions-container {\n    display: none;\n  }\n  .react-autosuggest__suggestions-container--open {\n    display: block;\n    position: relative;\n    top: -1px;\n  }\n  .react-autosuggest__suggestions-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-width: 320px;\n    max-width: 540px;\n    ', '\n    ', '\n    z-index: 2;\n  }\n  .react-autosuggest__suggestion {\n    cursor: pointer;\n  }\n  .react-autosuggest__suggestion--first {}\n  .react-autosuggest__suggestion--highlighted {}\n  .react-autosuggest__section-container {}\n  .react-autosuggest__section-container--first {}\n  .react-autosuggest__section-title {}\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shadows = require('../../utils/shadows');

var _borders = require('../../utils/borders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, _shadows.shadowSmall, _borders.borderSmall);