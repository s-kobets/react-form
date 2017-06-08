import addons from '@kadira/storybook-addons';
import Types from '@kadira/storybook-addon-knobs/dist/components/types';

/**
 * You must provide in:
 * @param name the equal name as you specifiend for knob
 * @param type the equal type-function-name as you specified for knob (string, booleam, number, etc)
 * @param value the new value for knob
 */
export default function updateKnob(name, type, value) {
  var channel = addons.getChannel();

  channel.emit('addon:updateKnob:changed', { name: name, type: type, value: value });
}

/**
 * storybook-addons hook
 */
addons.register('kupibilet.ru/storybook-addon-update-knob', function (api) {
  var channel = addons.getChannel();

  channel.on('addon:updateKnob:changed', function (_ref) {
    var name = _ref.name,
        type = _ref.type,
        value = _ref.value;

    channel.emit('addon:knobs:knobChange', { name: name, type: type, value: value });
  });
});