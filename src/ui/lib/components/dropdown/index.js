'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-flex;\n'], ['\n  position: relative;\n  display: inline-flex;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  padding: 18px 12px;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px 0 rgba(98,112,139,0.6);\n'], ['\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  padding: 18px 12px;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px 0 rgba(98,112,139,0.6);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownWrapper = _styledComponents2.default.div(_templateObject);

var DropdownOverlay = _styledComponents2.default.div(_templateObject2);

var Dropdown = function (_React$PureComponent) {
  _inherits(Dropdown, _React$PureComponent);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.handleClickOutside = function (evt) {
      var area = (0, _reactDom.findDOMNode)(_this.area);

      if (!area || area && !area.contains(evt.target)) {
        _this.setState({
          isOpen: false
        });
      }
    };

    _this.onClick = function () {
      _this.setState({ isOpen: !_this.state.isOpen });
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          overlay = _props.overlay;
      var isOpen = this.state.isOpen;


      var dropdownButton = _react2.default.cloneElement(children, {
        active: isOpen,
        onClick: this.onClick
      });

      return _react2.default.createElement(
        DropdownWrapper,
        _extends({}, this.props, {
          ref: function ref(name) {
            _this2.area = name;
          }
        }),
        dropdownButton,
        isOpen && _react2.default.createElement(
          DropdownOverlay,
          null,
          overlay
        )
      );
    }
  }]);

  return Dropdown;
}(_react2.default.PureComponent);

Dropdown.defaultProps = {
  children: _react2.default.createElement(
    'button',
    null,
    'Toggle'
  ),
  overlay: _react2.default.createElement(
    'div',
    null,
    'Hello World'
  )
};

Dropdown.propTypes = {
  children: _propTypes2.default.object.isRequired,
  overlay: _propTypes2.default.object.isRequired
};

exports.default = Dropdown;