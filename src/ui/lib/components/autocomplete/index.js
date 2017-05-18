'use strict';

// https://github.com/brigand/babel-plugin-flow-react-proptypes/issues/71#issuecomment-295771268

'no babel-plugin-flow-react-proptypes';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _sectionIterator = require('section-iterator');

var _sectionIterator2 = _interopRequireDefault(_sectionIterator);

var _styled = require('./styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFirstSuggestion = function getFirstSuggestion(_ref) {
  var suggestions = _ref.suggestions,
      multiSection = _ref.multiSection;

  var _suggestions = _slicedToArray(suggestions, 1),
      suggestion = _suggestions[0];

  if (multiSection && suggestion) {
    suggestion = suggestion[0];
  }

  return suggestion || null;
};

var getSectionIterator = function getSectionIterator(_ref2) {
  var multiSection = _ref2.multiSection,
      suggestions = _ref2.suggestions,
      getSectionSuggestions = _ref2.getSectionSuggestions;
  return (0, _sectionIterator2.default)({
    multiSection: multiSection,
    data: multiSection ? suggestions.map(function (section) {
      return getSectionSuggestions(section).length;
    }) : suggestions.length
  });
};

var Autocomplete = function (_React$PureComponent) {
  _inherits(Autocomplete, _React$PureComponent);

  function Autocomplete() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Autocomplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      suggestions: _this.props.suggestions || []
    }, _this.sectionIterator = getSectionIterator(_this.props), _this.autosuggestInstance = null, _this.userAreTyping = true, _this.autofilled = false, _this.onChange = function (event, payload) {
      var _this$autosuggestInst = _this.autosuggestInstance.state,
          highlightedSectionIndex = _this$autosuggestInst.highlightedSectionIndex,
          highlightedSuggestionIndex = _this$autosuggestInst.highlightedSuggestionIndex;

      var userAreTyping = payload.newValue.length >= _this.props.inputProps.value.length;

      if (_this.autofilled && userAreTyping) {
        return;
      }

      var suggestion = null;
      if (['down', 'up'].includes(payload.method)) {
        var iterate = _this.sectionIterator[payload.method === 'down' ? 'next' : 'prev'];

        var _iterate = iterate([highlightedSectionIndex, highlightedSuggestionIndex]),
            _iterate2 = _slicedToArray(_iterate, 2),
            _sectionIndex = _iterate2[0],
            suggestIndex = _iterate2[1];

        suggestion = _this.autosuggestInstance.getSuggestion(_sectionIndex, suggestIndex);
      }

      _this.props.inputProps.onChange(event, _extends({}, payload, {
        suggestion: suggestion
      }));

      _this.userAreTyping = userAreTyping;
      _this.autofilled = false;
    }, _this.onBlur = function (event) {
      if (_this.props.inputProps.onBlur) {
        _this.props.inputProps.onBlur(event);
      }

      if (_this.props.forceSuggesedValue) {
        _this.selectFirstSuggest(event, _this.props, 'blur');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /* eslint-disable react/sort-comp */


  _createClass(Autocomplete, [{
    key: 'componentWillReceiveProps',

    /* eslint-enable react/sort-comp */

    value: function componentWillReceiveProps(nextProps) {
      var suggestions = nextProps.suggestions,
          onSuggestionSelected = nextProps.onSuggestionSelected,
          multiSection = nextProps.multiSection;


      if (suggestions.length === 1 && onSuggestionSelected && this.userAreTyping) {
        this.autofilled = true;
        this.selectFirstSuggest(null, nextProps, 'autoSuggest');
        this.setState({ suggestions: [] });
      } else {
        this.setState({ suggestions: suggestions });
      }

      if (suggestions !== this.props.suggestions || multiSection !== this.props.multiSection) {
        this.sectionIterator = getSectionIterator(nextProps);
      }
    }
  }, {
    key: 'selectFirstSuggest',
    value: function selectFirstSuggest(event, props, method) {
      var _this2 = this;

      var getSuggestionValue = props.getSuggestionValue,
          alwaysRenderSuggestions = props.alwaysRenderSuggestions,
          multiSection = props.multiSection;

      var suggestion = getFirstSuggestion(props);

      var _autosuggestInstance$ = this.autosuggestInstance.state,
          isFocused = _autosuggestInstance$.isFocused,
          isCollapsed = _autosuggestInstance$.isCollapsed;


      var willRenderSuggestions = this.autosuggestInstance.willRenderSuggestions(this.props);
      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;

      if (isOpen && !alwaysRenderSuggestions) {
        this.autosuggestInstance.closeSuggestions();
      }

      if (suggestion && (this.userAreTyping || method === 'blur')) {
        var _newValue = getSuggestionValue(suggestion);

        this.autosuggestInstance.maybeCallOnChange(event, _newValue, method);

        this.autosuggestInstance.onSuggestionSelected(event, {
          suggestion: suggestion,
          suggestionValue: _newValue,
          suggestionIndex: 0,
          sectionIndex: multiSection ? 0 : null,
          method: method
        });

        this.autosuggestInstance.justSelectedSuggestion = true;

        // Autosuggest differentiates props updates
        // caused by arrow-keys navigation from other updates
        // https://github.com/moroshko/react-autosuggest/blob/master/src/Autosuggest.js#L366
        setTimeout(function () {
          if (_this2.autosuggestInstance) {
            _this2.autosuggestInstance.justSelectedSuggestion = false;
          }
        }, 0);
      } else if (!suggestion) {
        this.autosuggestInstance.maybeCallOnChange(event, '', method);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var suggestions = this.state.suggestions;
      // Pass neighboringInGroup prop to input

      var _props = this.props,
          neighboringInGroup = _props.neighboringInGroup,
          inputProps = _props.inputProps,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['neighboringInGroup', 'inputProps', 'className']);

      var spell = suggestions.length && this.props.getSuggestionValue(suggestions[0]) || '';

      return _react2.default.createElement(
        _styled2.default,
        { className: className },
        _react2.default.createElement(_reactAutosuggest2.default, _extends({}, props, {
          inputProps: _extends({
            neighboringInGroup: neighboringInGroup
          }, inputProps, {
            onChange: this.onChange,
            onBlur: this.onBlur,
            spell: spell
          }),
          suggestions: suggestions,
          ref: function ref(_ref4) {
            _this3.autosuggestInstance = _ref4;
          }
        }))
      );
    }
  }]);

  return Autocomplete;
}(_react2.default.PureComponent);

Autocomplete.propTypes = _extends({}, _reactAutosuggest2.default.propTypes, {
  forceSuggesedValue: _propTypes2.default.bool
});
Autocomplete.defaultProps = _extends({}, _reactAutosuggest2.default.defaultProps, {
  highlightFirstSuggestion: true,
  getSuggestionValue: function getSuggestionValue(suggestion) {
    return suggestion.value;
  },
  getSectionSuggestions: function getSectionSuggestions(section) {
    return section.values;
  },
  forceSuggesedValue: true
});
exports.default = Autocomplete;