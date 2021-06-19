import normalizeProps from "./normalizeProps";

interface Props {
  cols?: number | number[];
  colspan: number[];
  marginLeft: number[];
  marginRight: number[];
  breakpoints: number[];
}

function checkError({ cols, colspan, left, right }): number[] {
  let error = false;
  const colsChecked = cols.map((cols: number, index: number) => {
    if (cols + left[index] + right[index] > colspan[index]) {
      error = true;
      return colspan[index] - left[index] - right[index];
    }
    return cols;
  });
  if (error) {
    console.error(
      `Error in react-raster: Box has more cols than parent allows.`
    );
  }
  return colsChecked;
}

export default function normalizeCols({
  cols,
  colspan,
  breakpoints,
  marginLeft,
  marginRight,
}: Props): number[] {
  if (!cols) {
    return colspan.map((parentCols, index) => {
      return parentCols - marginLeft[index] - marginRight[index];
    });
  }
  const colsNormalized = normalizeProps(breakpoints, cols);
  return checkError({
    cols: colsNormalized,
    colspan,
    left: marginLeft,
    right: marginRight,
  });
}
