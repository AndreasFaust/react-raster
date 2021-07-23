import React from "react";

export default function useBreakpoints(
  propsBreakpoints?: number[],
  contextBreakpoints?: number[]
): number[] {
  const [breakpoints] = React.useState(
    propsBreakpoints || contextBreakpoints || [0, 432, 768, 1024, 1200, 1400]
  );
  return breakpoints;
}
