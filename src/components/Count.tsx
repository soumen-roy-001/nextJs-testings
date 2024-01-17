interface Props {
  count: number;
}

const Count = ({ count }: Props) => {
  return <div data-testid="count">Count: {count}</div>;
};
export default Count;
