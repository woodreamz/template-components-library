import { useMemo } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { ThemeProvider as MuiThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { StyleSheetManager } from 'styled-components';
import THEME from './globals/constants';
import themeFromColor from './utils/customAccentColor';
import getThemeDefinition from './utils/getThemeDefinition';

interface ThemeProviderProps {
  children: React.ReactNode;
  variant?: string;
  customTheme?: object;
  accentColor?: string;
  StyleSheetManagerProps?: object;
}

/**
 * Provides theme to the application.
 * Works with both MUI and Styled Components themes
 */
const ThemeProvider = ({
  children,
  variant = THEME.light,
  customTheme = undefined,
  accentColor = undefined,
  StyleSheetManagerProps = undefined,
}: ThemeProviderProps) => {
  const theme = useMemo(() => {
    const muiTheme = getThemeDefinition(variant as any);
    return createTheme(muiTheme as any);
  }, [variant]);

  if (customTheme) {
    return <MuiThemeProvider theme={customTheme}>{children}</MuiThemeProvider>;
  }
  if (accentColor) {
    return (
      <MuiThemeProvider theme={themeFromColor(accentColor, variant as any) as any}>
        {children}
      </MuiThemeProvider>
    );
  }

  return (
    <StyleSheetManager
      shouldForwardProp={(propName, elementToBeRendered) => {
        /**
         * Restore v5 behaviour (https://styled-components.com/docs/faqs#shouldforwardprop-is-no-longer-provided-by-default)
         * v5 code: https://github.com/styled-components/styled-components/blob/legacy-v5/packages/styled-components/src/models/StyledComponent.js#L140
         * If elementToBeRendered is a string, it means it's a html tag (e.g. div, span, etc.)
         * isPropValid is a function that checks if the prop is valid for a html tag
         */
        return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
      }}
      {...StyleSheetManagerProps}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyleSheetManager>
  );
};

export { useTheme };
export default ThemeProvider;
