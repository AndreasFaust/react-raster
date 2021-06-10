import React from "react";

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
  const [currentBp, setCurrentBp] = React.useState<currentBreakpoint>(
    contextBreakpoint || {
      index: 1,
      value: 0,
    }
  );
  React.useEffect(() => {
    if (!activateEventListener) return;
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
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return currentBp;
}
