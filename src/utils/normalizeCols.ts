import React from "react";
import normalizeProps from "./normalizeProps";

interface Props {
  cols?: number | number[];
  parentCols: number[];
  left: number[];
  right: number[];
  breakpoints: number[];
}

function checkError({ cols, parentCols, left, right }): number[] {
  let error = false;
  const colsChecked = cols.map((cols: number, index: number) => {
    if (cols + left[index] + right[index] > parentCols[index]) {
      error = true;
      return parentCols[index] - left[index] - right[index];
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
  parentCols,
  breakpoints,
  left,
  right,
}: Props): number[] {
  if (!cols) {
    return parentCols.map((parentCol, index) => {
      return parentCol - left[index] - right[index];
    });
  }
  const colsNormalized = normalizeProps({
    prop: cols,
    breakpoints,
  });

  return checkError({ cols: colsNormalized, parentCols, left, right });
}
