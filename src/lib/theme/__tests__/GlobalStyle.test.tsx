import { render } from '../../../tests';
import GlobalStyle from '../GlobalStyle';

describe('<GlobalStyle />', () => {
  it('should render correctly', () => {
    const { container } = render(<GlobalStyle />);
    expect(container).toMatchSnapshot();
  });
});
