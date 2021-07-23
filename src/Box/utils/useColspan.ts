import React from "react";
import SpacingObject from "./useSpacing/spacingObject";

export default function useColspan(
  colspanProps: number,
  colspanTotal: number,
  padding: SpacingObject,
  colsEffective: number
) {
  return React.useMemo(() => {
    if (colspanProps) {
      const left = typeof padding.left === "number" ? padding.left : 0;
      const right = typeof padding.right === "number" ? padding.right : 0;
      return colspanTotal - left - right;
    }
    return colsEffective;
  }, [colspanProps, colspanTotal, padding.left, padding.right]);
}
