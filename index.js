const colors = {
  black:        "#111A1F",
  red:          "#8D7856",
  green:        "#798362",
  yellow:       "#9B9257",
  blue:         "#63768A",
  magenta:      "#738C9C",
  cyan:         "#6998B3",
  white:        "#9A9A9A",
  lightBlack:   "#868b8d",
  lightRed:     "#8D7856",
  lightGreen:   "#798362",
  lightYellow:  "#9B9257",
  lightBlue:    "#63768A",
  lightMagenta: "#738C9C",
  lightCyan:    "#6998B3",
  lightWhite:   "#9A9A9A",
};

const originalColors = {
  gray1: "#161f2a"
};

const cursorColor = colors.yellow;
const foregroundColor = colors.white;
const backgroundColor = colors.black;
const selectionColor = originalColors.gray1;
const borderColor = originalColors.gray1;

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    cursorColor,
    foregroundColor,
    backgroundColor,
    selectionColor,
    borderColor,
    colors,
    css: config.css || '',
    termCSS: config.termCSS || ''
  });

