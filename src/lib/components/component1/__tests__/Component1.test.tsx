import { render } from '../../../../tests';
import Component1 from '../Component1';

describe('component1', () => {
  it('render Component1', () => {
    const { container } = render(<Component1 label="label" />);
    expect(container).toMatchSnapshot();
  });
});
