// #region component
interface Component2Props {
  label: string;
}

/**
 * Component2 is a component that displays a label.
 */
const Component2 = ({ label }: Component2Props) => {
  return <div>{label}</div>;
};
// #endregion

export default Component2;
