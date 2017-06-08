export var getThemeColor = function getThemeColor(theme, colorKey) {
  var fallbackColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'transparent';

  if (process.env.NODE_ENV === 'production' && colorKey && !(colorKey in theme.color)) {
    /* eslint-disable no-console */
    console.warn('Unknown color "' + colorKey + '" supplied');
  }

  return theme.color[colorKey] || fallbackColor;
};

export var ThemingPropTypes = {
  themeColor: function themeColor(props, propName, componentName) {
    var value = props[propName];

    if (!props.theme) {
      return new Error('You can improve <' + componentName + ' ' + propName + '="' + value + '"> prop validation\n by decorating ' + componentName + ' with `styled.withTheme` decorator ');
    }

    if (typeof value === 'string' && !props.theme.color[value]) {
      return new Error('Unknown color supplied for <' + componentName + ' ' + propName + '="' + value + '">.');
    }
  }
};