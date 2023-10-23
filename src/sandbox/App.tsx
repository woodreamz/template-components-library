import { Component1 } from '../../dist';
import { Component2 } from '../../dist/components/component2';

function App() {
  return (
    <>
      <div />
      <h1>This is a sandbox to test the library.</h1>

      <p>Click on the Vite and React logos to learn more</p>
      <Component1 label="my label" color="blue" />
      <Component2 label="my component2" />
    </>
  );
}

export default App;
