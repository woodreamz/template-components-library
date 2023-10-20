import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../utils';

// #region styled-components
const Container = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
`;
// #endregion

// #region component
interface Component1Props {
  /** The label to display */
  label: string;
  /** Color of the label */
  color?: string;
}

/**
 * Component1 is a component that displays a label.
 */
const Component1 = ({ label, color = 'green' }: Component1Props) => {
  return <Container $color={getColor(color)}>{label}</Container>;
};
// #endregion

export default React.memo(Component1);
