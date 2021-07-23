import React, { useEffect } from "react";
import debounce from "./debounce";

interface Props {
  activateEventListener: boolean;
  contextBreakpoint: number;
  breakpoints: number[];
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function useCurrentBreakpoint({
  activateEventListener,
  contextBreakpoint,
  breakpoints,
}: Props): number {
  const [currentBp, setCurrentBp] = React.useState(contextBreakpoint);

  useIsomorphicLayoutEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      const bp = breakpoints.findIndex((breakpoint) => breakpoint > w) - 1;
      setCurrentBp(bp === -2 ? breakpoints.length - 1 : bp);
    }
    if (activateEventListener) {
      onResize();
      const dOnResize = debounce(onResize, 100);
      window.addEventListener("resize", dOnResize);
      return () => window.removeEventListener("resize", dOnResize);
    }
  }, []);

  React.useEffect(() => {
    if (activateEventListener) return;
    setCurrentBp(contextBreakpoint);
  }, [contextBreakpoint]);

  return currentBp;
}
