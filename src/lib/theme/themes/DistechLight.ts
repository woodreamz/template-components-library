import { colors, fonts, typography, components } from '../globals';
import beta from './beta/DistechLight';

export default {
  // Theme object used by MUI's provider

  typography,
  palette: {
    mode: 'light',
    common: {
      black: colors.black,
      white: colors.white,
    },
    primary: {
      main: colors.blue300,
      light: colors.blue200,
      dark: colors.blue400,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.grey500,
      light: colors.grey400,
      dark: colors.grey600,
      contrastText: colors.white,
    },
    error: {
      main: colors.red,
      light: colors.red,
      dark: colors.red,
      contrastText: colors.white,
    },
    warning: {
      main: colors.orange,
      light: colors.orange,
      dark: colors.orange,
      contrastText: colors.white,
    },
    info: {
      main: colors.blue300,
      light: colors.blue200,
      dark: colors.blue400,
      contrastText: colors.white,
    },
    success: {
      main: colors.green,
      light: colors.green,
      dark: colors.green,
      contrastText: colors.white,
    },
    grey: {
      50: '#fafafa',
      100: colors.grey100,
      200: colors.grey200,
      300: colors.grey300,
      400: colors.grey400,
      500: colors.grey500,
      600: colors.grey600,
      700: colors.grey700,
      800: colors.grey800,
      900: colors.grey900,
      A100: colors.grey200,
      A200: colors.grey300,
      A400: colors.grey400,
      A700: colors.grey600,
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: colors.grey500,
      disabledBackground: colors.grey300,
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    background: {
      paper: colors.white,
      default: colors.white,
    },
    text: {
      primary: colors.grey800,
      secondary: colors.grey400,
      disabled: colors.grey500,
    },
  },

  // Theme object used by Styled Component's provider

  colors,
  fonts,
  isLightTheme: true,
  text: {
    fontFamily: fonts.fontFamily,
    primary: colors.grey800,
    secondary: colors.grey400,
    tertiary: colors.grey600,
  },
  primaryBackground: colors.white,
  secondaryBackground: colors.grey200,
  tertiaryBackground: colors.grey300,
  primaryFill: colors.blue300,
  primaryFocus: colors.blue300,
  primaryHover: colors.blue400,
  primarySelected: colors.blue500,
  primaryDisabled: colors.grey300,
  secondaryDisabled: colors.grey500,
  primaryBorder: colors.grey300,
  primaryShadow: 'rgba(0, 0, 0, 0.14)',
  secondaryShadow: 'rgba(0, 0, 0, 0.1)',
  plain: colors.grey700,
  good: colors.green,
  attention: colors.yellow,
  metric: colors.orange,
  caution: colors.red,
  marketing: colors.purple,
  components,

  // New design system tokens go ONLY here
  beta,
};
