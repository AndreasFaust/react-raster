import React from "react";
import spacingObject from "./useSpacing/spacingObject";

export default function useColspanEffective(
  cols: number,
  colspan: number,
  spacing: spacingObject
): number {
  return React.useMemo(() => {
    if (typeof cols === "number") return cols;
    const left = typeof spacing.left === "number" ? spacing.left : 0;
    const right = typeof spacing.right === "number" ? spacing.right : 0;
    return colspan - left - right;
  }, [cols, colspan, spacing.left, spacing.right]);
}
