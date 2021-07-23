import React from "react";
import SpacingObject from "./useSpacing/spacingObject";

export default function useColsTotal(
  colspanTotal: number,
  margin: SpacingObject,
  cols?: number
): number {
  return React.useMemo(() => {
    const left = typeof margin.left === "number" ? margin.left : 0;
    const right = typeof margin.right === "number" ? margin.right : 0;
    if (typeof cols === "number") {
      return cols + left + right;
    }
    return colspanTotal;
  }, [cols, margin.left, margin.right]);
}
