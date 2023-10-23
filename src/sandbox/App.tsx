import { Stack } from '@mui/material';
import { Button, ThemeProvider } from '../../dist';
import Button2 from '../../dist/components/Button';
import ActuatorIcon from '../../dist/icons/actuator.svg';

function App() {
  return (
    <ThemeProvider>
      <div />
      <h1>This is a sandbox to test the library.</h1>
      <Stack spacing={3} direction="row">
        <Button variant="contained">My Button</Button>
        <Button2 variant="outlined">My Button2</Button2>
        <img src={ActuatorIcon} alt="actuator" />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
