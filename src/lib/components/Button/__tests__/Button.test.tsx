import { screen } from '@testing-library/react';
import { render } from '../../../../tests';
import Button from '../Button';

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Click here</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should contain the good text', () => {
    const text = 'I am a button';
    render(<Button>{text}</Button>);
    screen.getByText(text);
  });

  it('should render text variant with normal flavor', () => {
    const { container } = render(
      <Button variant="text" flavor="normal">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render contained variant with normal flavor', () => {
    const { container } = render(
      <Button variant="contained" flavor="normal">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render outlined variant with normal flavor', () => {
    const { container } = render(
      <Button variant="outlined" flavor="normal">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render text variant with good flavor', () => {
    const { container } = render(
      <Button variant="text" flavor="good">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render contained variant with good flavor', () => {
    const { container } = render(
      <Button variant="contained" flavor="good">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render outlined variant with good flavor', () => {
    const { container } = render(
      <Button variant="outlined" flavor="good">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render text variant with attention flavor', () => {
    const { container } = render(
      <Button variant="text" flavor="attention">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render contained variant with attention flavor', () => {
    const { container } = render(
      <Button variant="contained" flavor="attention">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render outlined variant with attention flavor', () => {
    const { container } = render(
      <Button variant="outlined" flavor="attention">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render text variant with caution flavor', () => {
    const { container } = render(
      <Button variant="text" flavor="caution">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render contained variant with caution flavor', () => {
    const { container } = render(
      <Button variant="contained" flavor="caution">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render variant with caution flavor', () => {
    const { container } = render(
      <Button variant="outlined" flavor="caution">
        Click here
      </Button>
    );
    expect(container).toMatchSnapshot();
  });
});
