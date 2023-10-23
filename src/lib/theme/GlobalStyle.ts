import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

/**
 * Application Global Style.
 */
const GlobalStyle = createGlobalStyle`
  ${reset};
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    font-weight: ${({ theme }) => theme.fonts.regular};
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.primaryBackground};
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.fonts.defaultSize};
    color: ${({ theme }) => theme.text.primary};
  }

  * {
    font-family: ${({ theme }) => theme.text.fontFamily};
  }
`;

export default GlobalStyle;
