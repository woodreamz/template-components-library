import convert from 'color-convert';
import themeFromColor from '../customAccentColor';
import { THEME } from '../../index';

describe('themeFromColor', () => {
  it('adjust color', () => {
    const theme = themeFromColor('#BB0000', THEME.light);
    expect(theme.primaryFill).toEqual('#BB0000');
    expect(theme.primaryHover).toEqual('#FF3D3D');
    expect(theme.primaryFocus).toEqual('#FF3D3D');
    expect(theme.primarySelected).toEqual('#E42121');
  });

  it('not too bright', () => {
    const theme = themeFromColor('#FFFF00', THEME.light);
    const [L] = convert.hex.lab(theme.primaryFill);
    // Although themeFromColor wants the L value to be <= 80
    // But adjustBrightness still has small offset, so allow some error, use 81.
    expect(L).toBeLessThanOrEqual(81);
  });

  it('not too dark', () => {
    const theme = themeFromColor('#00010', THEME.dark);
    const [L] = convert.hex.lab(theme.primaryFill);
    // Although themeFromColor wants the L value to be >= 40
    // But adjustBrightness still has small offset, so allow some error, use 39.
    expect(L).toBeGreaterThanOrEqual(39);
  });
});
