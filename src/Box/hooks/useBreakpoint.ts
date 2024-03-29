import React from "react";
import debounce from "../utils/debounce";
import useIsomorphicLayoutEffect from "../utils/useIsomorphicLayoutEffect";

export default function useBreakpoint(
  breakpoints: number[],
  contextBreakpoint?: number,
  propsBreakpoints?: number[],
  propsColspan?: number[]
): number {
  const [currentBp, setCurrentBp] = React.useState(contextBreakpoint);

  useIsomorphicLayoutEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      const bp = breakpoints.findIndex((breakpoint) => breakpoint > w) - 1;
      setCurrentBp(bp === -2 ? breakpoints.length - 1 : bp);
    }
    if (propsBreakpoints || propsColspan) {
      onResize();
      const dOnResize = debounce(onResize, 100);
      window.addEventListener("resize", dOnResize);
      return () => window.removeEventListener("resize", dOnResize);
    }
  }, []);

  React.useEffect(() => {
    if (propsBreakpoints || propsColspan) return;
    setCurrentBp(contextBreakpoint);
  }, [contextBreakpoint, propsBreakpoints, propsColspan]);

  return currentBp;
}
