import React from "react";
import spacingObject from "./useSpacing/spacingObject";

export default function useColsEffective(
  colspan: number,
  padding: spacingObject,
  cols?: number
): number {
  return React.useMemo(() => {
    const left = typeof padding.left === "number" ? padding.left : 0;
    const right = typeof padding.right === "number" ? padding.right : 0;
    if (typeof cols === "number") return cols - left - right;
    return colspan - left - right;
  }, [cols, colspan, padding.left, padding.right]);
}
