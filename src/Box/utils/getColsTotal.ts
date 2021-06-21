interface Props {
  cols: number[];
  colspan: number[];
  marginLeft: number[];
  marginRight: number[];
}

export default function getColsTotal({
  cols,
  colspan,
  marginLeft,
  marginRight,
}: Props): number[] {
  return cols.map((col, index) => {
    return (
      (col ? col : colspan[index]) +
      (marginLeft[index] || 0) +
      (marginRight[index] || 0)
    );
  });
}
