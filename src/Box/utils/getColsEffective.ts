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
  if (!cols) {
    return colspan.map((parentCols, index) => {
      return (
        parentCols - (paddingLeft[index] || 0) - (paddingRight[index] || 0)
      );
    });
  }
  return cols.map((col, index) => {
    return col - (paddingLeft[index] || 0) - (paddingRight[index] || 0);
  });
}
