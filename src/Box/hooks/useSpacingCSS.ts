import React from "react";
import SpacingObject from "./useSpacing/spacingObject";

function useSpacingValue(
  gap: string,
  colspan: number,
  prop: string | number,
  counterProp: string | number
) {
  return React.useMemo(() => {
    switch (typeof prop) {
      case "number":
        const counter = counterProp === "string" ? counterProp : "0px";
        return `calc(((100% + ${gap} - ${counter}) / ${colspan}) * ${prop})`;
      default:
        return prop;
    }
  }, [gap, colspan, prop, counterProp]);
}

export default function useSpacingCSS(
  gap: { row: string; column: string },
  colspan: number,
  spacing: SpacingObject
) {
  const left = useSpacingValue(
    gap.column,
    colspan,
    spacing.left,
    spacing.right
  );
  const right = useSpacingValue(
    gap.column,
    colspan,
    spacing.right,
    spacing.left
  );
  const top = useSpacingValue(gap.row, colspan, spacing.top, spacing.bottom);
  const bottom = useSpacingValue(gap.row, colspan, spacing.bottom, spacing.top);
  return { left, right, top, bottom };
}
