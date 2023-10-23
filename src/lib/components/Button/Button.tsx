import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import styled from 'styled-components';
import {
  getColor,
  getBackground,
  getColorHover,
  getBackgroundHover,
  getColorPress,
  getBackgroundPress,
  getBackgroundDisabled,
  getColorDisabled,
  getBorderColor,
  flavors,
  sizes,
  getSize,
  getIconSize,
  getFontSize,
  getBorderColorHover,
  getBorderColorPress,
  hexToRgba,
} from '../../theme/utils/styleUtils';
// @ts-nocheck

// #region constants
const defaultClasses = {
  root: 'buttonRoot',
  label: 'buttonLabel',
  focusVisible: 'buttonFocusVisible',
  disabled: 'buttonDisabled',
};
// #endregion

// #region functions
const getPadding = (size: any) => {
  let padding = '8px 16px';
  if (size === sizes.small) {
    padding = '4px 16px';
  }
  if (size === sizes.extraSmall) {
    padding = '2px 16px';
  }
  return padding;
};
// #endregion

// #region styled-components
const StyledButton = styled(MuiButton)<{
  $size: string;
  $flavor: string;
  variant: string;
  $svgStrokeWidth: number;
  $svgColorAttribute: string;
}>`
  &&.buttonRoot {
    min-height: ${({ $size }) => getSize($size)};
    height: ${({ $size }) => getSize($size)};
    font-size: ${({ $size }) => getFontSize($size)};
    line-height: 1.2em;
    text-transform: none;
    font-weight: ${({ theme }) => theme.fonts.semibold};
    padding: ${({ $size }) => getPadding($size)};
    color: ${({ $flavor, theme, variant }) => getColor(theme, variant, $flavor)};
    background-color: ${({ $flavor, theme, variant }) => getBackground(theme, variant, $flavor)};
    border: solid 1px ${({ $flavor, theme, variant }) => getBorderColor(theme, variant, $flavor)};
    box-shadow: none;
    /* No wrap and add ellipsis. */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    svg {
      height: ${({ $size, variant }) => getIconSize($size, variant)};
      width: ${({ $size, variant }) => getIconSize($size, variant)};
      fill: transparent;
      stroke: transparent;
      stroke-width: ${({ $svgStrokeWidth }) => $svgStrokeWidth};
      ${({ $svgColorAttribute }) => `${$svgColorAttribute}:currentColor`};
      flex-shrink: 0;
    }
  }
  &&.buttonRoot:hover {
    color: ${({ $flavor, theme, variant }) => getColorHover(theme, variant, $flavor)};
    background-color: ${({ $flavor, theme, variant }) =>
      getBackgroundHover(theme, variant, $flavor)};
    border: solid 1px
      ${({ $flavor, theme, variant }) => getBorderColorHover(theme, variant, $flavor)};
    svg {
      ${({ $svgColorAttribute }) => `${$svgColorAttribute}:currentColor`};
    }
  }
  &&.buttonRoot.buttonFocusVisible {
    box-shadow: 0px 0px 4px 0px
      ${({ theme }) => hexToRgba(theme.primaryFocus, theme.isLightTheme ? 0.5 : 1)};
  }
  &&.buttonRoot:active {
    color: ${({ $flavor, theme, variant }) => getColorPress(theme, variant, $flavor)};
    background-color: ${({ $flavor, theme, variant }) =>
      getBackgroundPress(theme, variant, $flavor)};
    border: solid 1px
      ${({ $flavor, theme, variant }) => getBorderColorPress(theme, variant, $flavor)};
    svg {
      ${({ $svgColorAttribute }) => `${$svgColorAttribute}:currentColor`};
    }
  }
  &&.buttonDisabled {
    color: ${({ theme, variant }) => getColorDisabled(theme, variant)};
    background-color: ${({ theme, variant }) => getBackgroundDisabled(theme, variant)};
    border: solid 1px transparent;
    svg {
      ${({ $svgColorAttribute }) => `${$svgColorAttribute}:currentColor`};
    }
  }
`;
// #endregion

// #region components
export interface ButtonProps extends MuiButtonProps {
  flavor?: string;
  svgColorAttribute?: string;
  svgStrokeWidth?: number;
}

const Button = ({
  children,
  classes,
  flavor = flavors.normal,
  svgColorAttribute = 'stroke',
  svgStrokeWidth = 1.5,
  ...others
}: ButtonProps) => {
  return (
    <StyledButton<any>
      {...others}
      $size={sizes.medium}
      classes={{ ...defaultClasses, ...classes }}
      $flavor={flavor}
      $svgColorAttribute={svgColorAttribute}
      $svgStrokeWidth={svgStrokeWidth}
      disableElevation
    >
      {children}
    </StyledButton>
  );
};
// #endregion

export default Button;
