import { hexToRgba } from '../styleUtils';

describe('styleUtils', () => {
  describe('hexToRgba', () => {
    it('Should return rgba for valid 6 digits hex', () => {
      expect(hexToRgba('#abcdef', 0.1)).toEqual('rgba(171, 205, 239, 0.1)');
    });

    it('Should return rgba for valid 3 digits hex', () => {
      expect(hexToRgba('#abc', 0.1)).toEqual('rgba(170, 187, 204, 0.1)');
    });

    it('Should return an alpha of 1 by default', () => {
      expect(hexToRgba('#abcdef')).toEqual('rgba(171, 205, 239, 1)');
    });

    it('Should not be case sensitive on hex', () => {
      expect(hexToRgba('#ABCDEF', 0.1)).toEqual('rgba(171, 205, 239, 0.1)');
      expect(hexToRgba('#AbC123', 0.1)).toEqual('rgba(171, 193, 35, 0.1)');
      expect(hexToRgba('#ABC', 0.1)).toEqual('rgba(170, 187, 204, 0.1)');
    });

    it('Should return undefined if hex is invalid', () => {
      // Missing #.
      expect(hexToRgba('ABCDEF', 0.1)).toBeUndefined();
      // Too short.
      expect(hexToRgba('#bC123', 0.1)).toBeUndefined();
      // Too long.
      expect(hexToRgba('#ABCDE12', 0.1)).toBeUndefined();
      // Invalid character.
      expect(hexToRgba('##ABC', 0.1)).toBeUndefined();
      // Invalid character.
      expect(hexToRgba('#ABCDEG', 0.1)).toBeUndefined();
    });
  });
});
