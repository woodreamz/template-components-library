import convert from 'color-convert';
import getThemeDefinition, { ThemeKey } from './getThemeDefinition';

/**
 * Get a brighter color from input LAB color input.
 * @param {Number} primaryL The input L of the LAB color space.
 * @param {Number} highlight How much brighter the color will be, value from 0 ~ 1.
 * @param {Number} A The input A of the LAB color space.
 * @param {Number} B the input B of the LAB color space.
 * @param {Number} hue The original hue value in HSL color space.
 * @returns {String}
 */
function adjustBrightness(primaryL: number, highlight: number, A: number, B: number, hue: number) {
  let brighterL = primaryL + 50;
  if (brighterL > 100) brighterL = 100;

  // highlight% of the brighter color + (1-highlight)% of input color
  const highLightL = primaryL * (1 - highlight) + highlight * brighterL;

  // Convert to HSL color space to make sure hue is not changed.
  // @ts-ignore
  const [, S, L] = convert.lab.hsl(highLightL, A, B);

  // Check if the brightness and hue have big error.
  const [adjustedL, adjustedA, adjustedB] = convert.hsl.lab([hue, S, L]);
  if (Math.abs(highLightL - adjustedL) > 10) {
    // Iterate adjustBrightness() to get more accurate hue and brightness.
    return adjustBrightness(primaryL, highlight, adjustedA, adjustedB, hue);
  }
  return `#${convert.hsl.hex([hue, S, L])}`;
}

export default function themeFromColor(accentColor: string, variant: ThemeKey) {
  const baseTheme = getThemeDefinition(variant);
  const isLightTheme = baseTheme.palette.mode === 'light';
  if (accentColor === baseTheme.primaryFill) {
    return baseTheme;
  }
  const [L, A, B] = convert.hex.lab(accentColor);
  const hue = convert.hex.hsl(accentColor)[0];
  let primaryL = L;
  // Primary color can't be too bright, primary button's white text would be invisible.
  if (primaryL > 80) primaryL = 80;
  if (!isLightTheme) {
    // Primary color can't be too dark in dark theme, link text would be invisible.
    if (primaryL < 40) primaryL = 40;
  }

  const primaryFill = L === primaryL ? accentColor : adjustBrightness(primaryL, 0, A, B, hue);
  const primaryHover = adjustBrightness(primaryL, 0.5, A, B, hue);
  const primarySelected = adjustBrightness(primaryL, 0.25, A, B, hue);
  const primaryFocus = primaryHover;

  return { ...baseTheme, primaryFill, primaryHover, primarySelected, primaryFocus };
}
