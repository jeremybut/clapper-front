const colors = {
  red: {
    default: '#F52C2C', // red
  },
  grey: {
    default: '#cccccc', // clouds
    light: '#ebeef0', // light grey
    dark: '#b8bfc3', // icons
  },
  blue: {
    default: '#3377FF', // links
    fade: '#99A6BF', // text light
    dark: '#3F557F', // text
    darker: '#192233', // text darker
  },
  green: {
    default: '#22a36e', // green 1
    light: '#69c028', // green 2
    fade: '#a8d765', // green 3
    pale: '#e9f5d8', // hover menu
  },
  yellow: {
    default: '#FFBB00', // light yellow
    warmer: '#FFA200', // secondary brand
  },
};

const color = (name, shade = 'default') => {
  return colors[name] && colors[name][shade];
}

const colorsUi = {
  primary: color('red'),
  secondary: color('yellow', 'warmer'),
  link: color('blue'),
  text: color('blue', 'dark'),
  textLight: color('blue', 'fade'),
  textDark: color('blue', 'darker'),
};

const ui = name => colorsUi[name];

export { color, ui };
