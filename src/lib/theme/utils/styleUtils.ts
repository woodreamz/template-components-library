import styled, { keyframes } from 'styled-components';
import fonts from '../globals/fonts';
// @ts-nocheck

/**
 * Convert hexadecimal color to {r,g,b} object.
 * @param {String} hex Color in hexadecimal following the format #ABC or #ABCDEF.
 * @return {Object} {r,g,b} values as an object.
 */
function hexToRgbValues(hex: string | any[]) {
  if (hex === 'transparent') {
    return hex;
  }
  let rgb;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex as any)) {
    let hexColor = hex;
    // Convert to short form if needed.
    if (hex.length === 4) {
      hexColor = `${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }
    const r = parseInt(hexColor.slice(1, 3) as any, 16);
    const g = parseInt(hexColor.slice(3, 5) as any, 16);
    const b = parseInt(hexColor.slice(5, 7) as any, 16);
    rgb = { r, g, b };
  }

  return rgb;
}

/**
 * Convert hexadecimal color to rgb() string.
 * @param {String} hex Color in hexadecimal following the format #ABC or #ABCDEF.
 * @return {String} rgb() function call as a string.
 */
function hexToRgb(hex: string | any[]) {
  let rgb = hexToRgbValues(hex);

  if (rgb) {
    rgb = `rgb(${(rgb as any).r}, ${(rgb as any).g}, ${(rgb as any).b})`;
  }

  return rgb;
}

/**
 * Convert hexadecimal color to rgba() string.
 * @param {String} hex Color in hexadecimal following the format #ABC or #ABCDEF.
 * @param {Number} alpha Value between 0 and 1 representing the alpha transparency level.
 * @return {String} rgba() function call as a string.
 */
function hexToRgba(hex: string | any[], alpha = 1) {
  if (hex === 'transparent') {
    return hex;
  }
  let rgb = hexToRgbValues(hex);

  if (rgb) {
    rgb = `rgba(${(rgb as any).r}, ${(rgb as any).g}, ${(rgb as any).b}, ${alpha})`;
  }

  return rgb;
}

/**
 * Create a fadeIn property for the FadeIn react component helper.
 */
const fadeIn = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

/**
 * Fade In effect component.
 * This component will add a fade in effect to the component it contains.
 */
const FadeIn = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 1s;
`;

const flavors = {
  normal: 'normal',
  plain: 'plain',
  good: 'good',
  attention: 'attention',
  metric: 'metric',
  caution: 'caution',
  marketing: 'marketing',
};

const getStatusColor = (theme: any, severity: string) => {
  let color = theme.primaryFill;
  if (severity === 'error') {
    color = theme.caution;
  } else if (severity === 'info') {
    color = theme.primaryFill;
  } else if (severity === 'success') {
    color = theme.good;
  } else if (severity === 'warning') {
    color = theme.metric;
  }
  return color;
};

const getFlavorColor = (
  theme: {
    text: any;
    primaryFill: any;
    plain: any;
    good: any;
    attention: any;
    metric: any;
    caution: any;
    marketing: any;
  },
  flavor: string,
  defaultColor?: string
) => {
  let color = defaultColor || theme.text.primary;
  if (flavor === flavors.normal) {
    color = theme.primaryFill;
  } else if (flavor === flavors.plain) {
    color = theme.plain;
  } else if (flavor === flavors.good) {
    color = theme.good;
  } else if (flavor === flavors.attention) {
    color = theme.attention;
  } else if (flavor === flavors.metric) {
    color = theme.metric;
  } else if (flavor === flavors.caution) {
    color = theme.caution;
  } else if (flavor === flavors.marketing) {
    color = theme.marketing;
  } else if (flavor?.startsWith('#')) {
    // flavor can be a color (used for special cases).
    color = flavor;
  }
  return color;
};

const lightOpacity = 0.65;
const darkOpacity = 0.85;

const getOpacity = (flavor: string, darker: boolean) => {
  if (flavor === flavors.normal) {
    return 1;
  }
  return darker ? darkOpacity : lightOpacity;
};

const sizes = {
  extraSmall: 'extraSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  extraLarge: 'extraLarge',
  superExtraLarge: 'superExtraLarge',
};

const variants = {
  normal: 'normal',
  outlined: 'outlined',
  contained: 'contained',
};

const getSize = (size: string) => {
  let elementSize = '34px';
  if (size === sizes.extraSmall) {
    elementSize = '20px';
  } else if (size === sizes.small) {
    elementSize = '24px';
  } else if (size === sizes.large) {
    elementSize = '40px';
  } else if (size === sizes.extraLarge) {
    elementSize = '46px';
  } else if (size === sizes.superExtraLarge) {
    elementSize = '56px';
  }
  return elementSize;
};

const getIconSize = (size: string, variant: string) => {
  let iconSize = 16;
  let largePlus = false;
  if (size === sizes.extraSmall) {
    iconSize = 12;
  } else if (size === sizes.small) {
    iconSize = 12;
  } else if (size === sizes.large) {
    iconSize = 20;
    largePlus = true;
  } else if (size === sizes.extraLarge) {
    iconSize = 24;
    largePlus = true;
  } else if (size === sizes.superExtraLarge) {
    iconSize = 30;
    largePlus = true;
  }
  if (variant === variants.normal && largePlus) {
    iconSize += 4;
  }
  return `${iconSize}px`;
};

const getPadding = (size: string) => {
  let padding = '8px';
  if (size === sizes.extraSmall) {
    padding = '4px';
  } else if (size === sizes.small) {
    padding = '4px';
  } else if (size === sizes.superExtraLarge) {
    padding = '12px';
  }
  return padding;
};

const getFontSize = (size: string) => {
  let fontSize = fonts.smallTextSize;
  if (size === sizes.extraSmall) {
    fontSize = fonts.extraSmallTextSize;
  } else if (size === sizes.small) {
    fontSize = fonts.extraSmallTextSize;
  } else if (size === sizes.large) {
    fontSize = fonts.mediumTextSize;
  } else if (size === sizes.extraLarge) {
    fontSize = fonts.largeTextSize;
  } else if (size === sizes.superExtraLarge) {
    fontSize = fonts.extraLargeTextSize;
  }
  return fontSize;
};

const getColor = (theme: any, variant: string, flavor: any) => {
  let color = getFlavorColor(theme as any, flavor);
  if (variant === variants.contained) {
    color = theme.colors.white;
  }
  return color;
};

const getBackground = (theme: any, variant: string, flavor: any) => {
  let color = 'transparent';
  if (variant === variants.contained) {
    color = getFlavorColor(theme, flavor);
  }
  return color;
};

const getBorderColor = (theme: any, variant: string, flavor: any) => {
  let color = 'transparent';
  if (variant === variants.outlined) {
    color = getFlavorColor(theme, flavor);
  }
  return color;
};

const getColorHover = (theme: any, variant: string, flavor: string) => {
  let color = hexToRgba(getFlavorColor(theme as any, flavor), getOpacity(flavor, false));
  if (flavor === flavors.normal) {
    color = theme.primaryHover;
  }
  if (variant === variants.contained) {
    color = theme.colors.white;
  }
  return color;
};

const getBackgroundHover = (theme: any, variant: string, flavor: string) => {
  let color = 'transparent';
  if (variant === variants.contained) {
    if (flavor === flavors.normal) {
      color = theme.primaryHover;
    } else {
      color = hexToRgba(getFlavorColor(theme as any, flavor), getOpacity(flavor, false)) as any;
    }
  }
  return color;
};

const getBorderColorHover = (theme: any, variant: string, flavor: string) => {
  let color = 'transparent';
  if (variant === variants.outlined) {
    if (flavor === flavors.normal) {
      color = theme.primaryHover;
    } else {
      color = hexToRgba(getFlavorColor(theme as any, flavor), getOpacity(flavor, false)) as any;
    }
  }
  return color;
};

const getColorPress = (theme: any, variant: string, flavor: string) => {
  let color = hexToRgba(getFlavorColor(theme as any, flavor), getOpacity(flavor, true));
  if (flavor === flavors.normal) {
    color = theme.primarySelected;
  }
  if (variant === variants.contained) {
    color = theme.colors.white;
  }
  return color;
};

const getBackgroundPress = (theme: any, variant: string, flavor: string) => {
  let color = 'transparent';
  if (variant === variants.contained) {
    if (flavor === flavors.normal) {
      color = theme.primarySelected;
    } else {
      color = hexToRgba(getFlavorColor(theme as any, flavor), getOpacity(flavor, true)) as any;
    }
  }
  return color;
};

const getBorderColorPress = (theme: any, variant: string, flavor: string) => {
  let color = 'transparent';
  if (variant === variants.outlined) {
    if (flavor === flavors.normal) {
      color = theme.primarySelected;
    } else {
      color = hexToRgba(getFlavorColor(theme as any, flavor), getOpacity(flavor, true)) as any;
    }
  }
  return color;
};

const getColorDisabled = (theme: any, variant: string) => {
  let color = theme.secondaryDisabled;
  if (variant === variants.outlined || variant === variants.contained) {
    color = theme.secondaryDisabled;
  }
  return color;
};

const getBackgroundDisabled = (theme: any, variant: string) => {
  let color = 'transparent';
  if (variant === variants.outlined || variant === variants.contained) {
    color = theme.primaryDisabled;
  }
  return color;
};

const getShadow = (theme: any, variant: string) => {
  let shadow = 'none';
  if (variant === 'elevation') {
    shadow = `0px 2px 8px 0px ${theme.secondaryShadow}`;
  }
  return shadow;
};

export {
  darkOpacity,
  FadeIn,
  flavors,
  getFlavorColor,
  getShadow,
  getOpacity,
  getStatusColor,
  getSize,
  getIconSize,
  getPadding,
  getFontSize,
  getColor,
  getBackground,
  getColorHover,
  getBackgroundHover,
  getBorderColorHover,
  getColorPress,
  getBackgroundPress,
  getBorderColorPress,
  getBackgroundDisabled,
  getColorDisabled,
  getBorderColor,
  hexToRgb,
  hexToRgba,
  lightOpacity,
  sizes,
  variants,
};
