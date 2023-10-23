import { Component1 } from '../../dist';
import { Component2 } from '../../dist/components/component2';
import ActuatorIcon from '../../dist/icons/actuator.svg';

function App() {
  return (
    <>
      <div />
      <h1>This is a sandbox to test the library.</h1>
      <Component1 label="my label" color="blue" />
      <Component2 label="my component2" />
      <img src={ActuatorIcon} alt="actuator" />
    </>
  );
}

export default App;
