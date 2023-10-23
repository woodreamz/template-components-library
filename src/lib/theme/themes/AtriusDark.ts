import distechDark from './DistechDark';
import beta from './beta/AtriusDark';

const { beta: ignore, ...dark } = distechDark;

export default {
  // Atrius or SOA themes are not defined for legacy components,
  // use Distech's theme for backwards compatibility
  ...dark,

  // New design system tokens go ONLY here
  beta,
};
