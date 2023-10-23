import React from 'react';
import styled from 'styled-components';
import ThemeProvider from '../src/lib/theme/ThemeProvider';
import GlobalStyle from '../src/lib/theme/GlobalStyle';

const Root = styled.div`
  height: 100%;
  font-weight: ${({ theme }) => theme.fonts.regular};
  background-color: ${({ theme }) => theme.primaryBackground};
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.fonts.defaultSize};
  color: ${({ theme }) => theme.text.primary};
  padding: 16px;
  box-sizing: border-box;
`;

/**
 * This wrapper is required because providers must be rendered before the story function is executed.
 * @param {function} StoryComponent The story to render.
 */
const StoryWrapper = (Story, context) => {
  return (
    <ThemeProvider variant={context.globals.theme}>
      <GlobalStyle />
      <Root>
        <Story />
      </Root>
    </ThemeProvider>
  );
};

export default StoryWrapper;
