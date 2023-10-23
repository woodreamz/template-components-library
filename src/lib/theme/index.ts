import colors from './globals/colors';
import THEME from './globals/constants';
import fonts from './globals/fonts';
import typography from './globals/typography';
import GlobalStyle from './GlobalStyle';
import ThemeProvider, { useTheme } from './ThemeProvider';

export * from './themes';
export * from './utils/styleUtils';

export { fonts, typography, THEME, colors, useTheme, ThemeProvider, GlobalStyle };
