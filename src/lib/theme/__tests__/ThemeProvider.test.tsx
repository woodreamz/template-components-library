import styled, { useTheme } from 'styled-components';
import { render, renderHook } from '../../../tests';
import { THEME } from '../index';

describe('<ThemeProvider />', () => {
  it('should render correctly', () => {
    const { container } = render(<div />);
    expect(container).toMatchSnapshot();
  });

  it('should use new theme', () => {
    const StyledDiv = styled.div`
      color: ${(props) => props.theme.primaryText};
      background-color: ${(props) => props.theme.primaryBackground};
    `;
    const { container } = render(<StyledDiv />);
    expect(container).toMatchSnapshot();
  });

  it('should match the light theme', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current).toMatchSnapshot();
  });

  it('should match the dark theme', () => {
    const { result } = renderHook(() => useTheme(), undefined, {
      variant: THEME.dark,
    });
    expect(result.current).toMatchSnapshot();
  });
});
