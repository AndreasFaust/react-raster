import React from "react";
import debounce from "./debounce";

export type currentBreakpoint = {
  index: number;
  value: number;
};

interface Props {
  activateEventListener: boolean;
  contextBreakpoint: currentBreakpoint;
  breakpoints: number[];
}

export default function useCurrentBreakpoint({
  activateEventListener,
  contextBreakpoint,
  breakpoints,
}: Props): currentBreakpoint {
  const [currentBp, setCurrentBp] =
    React.useState<currentBreakpoint>(contextBreakpoint);

  React.useLayoutEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      let bp = { index: 1, value: 0 };
      breakpoints.forEach((breakpoint, index) => {
        if (breakpoint <= w) {
          bp = { index: index + 1, value: breakpoint };
        }
      });
      setCurrentBp(bp);
    }
    if (!activateEventListener) {
      onResize();
      const dOnResize = debounce(onResize, 100);
      window.addEventListener("resize", dOnResize);
      return () => window.removeEventListener("resize", dOnResize);
    }
  }, []);
  return currentBp;
}
