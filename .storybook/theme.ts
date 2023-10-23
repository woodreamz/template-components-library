import { create } from '@storybook/theming/create';
import { light } from '../src/lib/theme';
import pkg from '../package.json';

export default create({
  base: 'light',

  colorPrimary: light.colors.blue500,
  colorSecondary: light.colors.blue300,

  // UI
  appBg: light.primaryBackground,
  appContentBg: light.primaryBackground,
  appBorderColor: light.primaryBorder,
  appBorderRadius: 4,

  // Typography
  fontBase: light.fonts.fontFamily,

  // Text colors
  textColor: light.text.primary,
  textInverseColor: light.text.secondary,

  // Toolbar default and active colors
  barTextColor: light.text.primary,
  barSelectedColor: light.primaryFocus,
  barBg: light.primaryBackground,

  // Form colors
  inputBg: light.primaryBackground,
  inputBorder: light.primaryBorder,
  inputTextColor: light.text.primary,
  inputBorderRadius: 4,

  brandTitle: 'Fusion v' + pkg.version,
});
