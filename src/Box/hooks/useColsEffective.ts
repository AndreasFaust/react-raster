import React from "react";
import spacingObject from "./useSpacing/spacingObject";

export default function useColsEffective(
  colspan: number,
  margin: spacingObject,
  padding: spacingObject,
  cols?: number
): number {
  return React.useMemo(() => {
    const paddingLeft = typeof padding.left === "number" ? padding.left : 0;
    const paddingRight = typeof padding.right === "number" ? padding.right : 0;
    const marginLeft = typeof margin.left === "number" ? margin.left : 0;
    const marginRight = typeof margin.right === "number" ? margin.right : 0;

    if (typeof cols === "number") return cols - paddingLeft - paddingRight;
    return colspan - paddingLeft - paddingRight - marginLeft - marginRight;
  }, [cols, colspan, padding.left, padding.right, margin.left, margin.right]);
}
