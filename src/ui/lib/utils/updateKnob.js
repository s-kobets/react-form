'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateKnob;

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _types = require('@kadira/storybook-addon-knobs/dist/components/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * You must provide in:
 * @param name the equal name as you specifiend for knob
 * @param type the equal type-function-name as you specified for knob (string, booleam, number, etc)
 * @param value the new value for knob
 */
function updateKnob(name, type, value) {
  var channel = _storybookAddons2.default.getChannel();

  channel.emit('addon:updateKnob:changed', { name: name, type: type, value: value });
}

/**
 * storybook-addons hook
 */
_storybookAddons2.default.register('kupibilet.ru/storybook-addon-update-knob', function (api) {
  var channel = _storybookAddons2.default.getChannel();

  channel.on('addon:updateKnob:changed', function (_ref) {
    var name = _ref.name,
        type = _ref.type,
        value = _ref.value;

    api.setQueryParams(_defineProperty({}, 'knob-' + name, _types2.default[type].serialize(value)));

    channel.emit('addon:knobs:knobChange', { name: name, type: type, value: value });
  });
});