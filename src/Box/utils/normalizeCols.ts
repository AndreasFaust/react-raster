import normalizeProps from "./normalizeProps";

interface Props {
  cols?: number | number[];
  colspan: number[];
  marginLeft: number[];
  marginRight: number[];
  paddingLeft?: number[];
  paddingRight?: number[];
  breakpoints: number[];
}

export default function normalizeCols({
  cols,
  colspan,
  breakpoints,
  marginLeft,
  marginRight,
  paddingLeft,
  paddingRight,
}: Props): number[] {
  if (!cols) {
    return colspan.map((parentCols, index) => {
      return (
        parentCols -
        (marginLeft[index] || 0) -
        (marginRight[index] || 0) -
        ((paddingLeft && paddingLeft[index]) || 0) -
        ((paddingRight && paddingRight[index]) || 0)
      );
    });
  }
  const colsNormalized = normalizeProps(breakpoints, cols);
  return colsNormalized.map((parentCols, index) => {
    return (
      parentCols -
      (marginLeft[index] || 0) -
      (marginRight[index] || 0) -
      ((paddingLeft && paddingLeft[index]) || 0) -
      ((paddingRight && paddingRight[index]) || 0)
    );
  });
}
