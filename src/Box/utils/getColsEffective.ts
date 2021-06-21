interface Props {
  cols: number[];
  colspan: number[];
  paddingLeft: number[];
  paddingRight: number[];
}

export default function getColsEffective({
  cols,
  colspan,
  paddingLeft,
  paddingRight,
}: Props): number[] {
  return cols.map((col, index) => {
    return (
      (typeof col === "number" ? col : colspan[index]) -
      (paddingLeft[index] || 0) -
      (paddingRight[index] || 0)
    );
  });
}
