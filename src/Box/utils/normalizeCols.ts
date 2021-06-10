import normalizeProps from "./normalizeProps";

interface Props {
  cols?: number | number[];
  colspan: number[];
  left: number[];
  right: number[];
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
  left,
  right,
}: Props): number[] {
  if (!cols) {
    return colspan.map((parentCol, index) => {
      return parentCol - left[index] - right[index];
    });
  }
  const colsNormalized = normalizeProps(breakpoints, cols);

  return checkError({ cols: colsNormalized, colspan, left, right });
}
