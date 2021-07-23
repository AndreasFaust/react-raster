import React from "react";
import useProp from "../useProp";
import useSpacingShort from "./useSpacingShort";

export default function useSpacing(
  breakpoint: number,
  short?: string | string[],
  left?: string | number | (string | number)[],
  right?: string | number | (string | number)[],
  top?: string | number | (string | number)[],
  bottom?: string | number | (string | number)[]
): {
  top: string | number;
  bottom: string | number;
  left: string | number;
  right: string | number;
} {
  const shortNormalized = useSpacingShort(breakpoint, short);
  const leftNormalized = useProp(breakpoint, left);
  const rightNormalized = useProp(breakpoint, right);
  const topNormalized = useProp(breakpoint, top);
  const bottomNormalized = useProp(breakpoint, bottom);

  return React.useMemo(
    () => ({
      left: (leftNormalized || shortNormalized.left) as string | number,
      right: (rightNormalized || shortNormalized.right) as string | number,
      top: (topNormalized || shortNormalized.top) as string | number,
      bottom: (bottomNormalized || shortNormalized.bottom) as string | number,
    }),
    [
      shortNormalized,
      leftNormalized,
      rightNormalized,
      topNormalized,
      bottomNormalized,
    ]
  );
}
