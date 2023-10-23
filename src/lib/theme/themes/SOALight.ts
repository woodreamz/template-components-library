import beta from './beta/SOALight';
import distechLight from './DistechLight';

const { beta: ignore, ...light } = distechLight;

export default {
  // Atrius or SOA themes are not defined for legacy components,
  // use Distech's theme for backwards compatibility
  ...light,

  // New design system tokens go ONLY here
  beta,
};
