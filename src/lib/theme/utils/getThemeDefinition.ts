import { light, dark, atriusLight, atriusDark, soaLight } from '../themes';

export type ThemeKey = 'light' | 'dark' | 'atriusLight' | 'atriusDark' | 'soaLight';

const themes = {
  light,
  dark,
  atriusLight,
  atriusDark,
  soaLight,
};

export default (themeKey: ThemeKey) => themes[themeKey];
