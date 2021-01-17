import { useMemo } from "react";

interface Props {
  currentBreakpoint: {
    index: number;
    value: number;
  };
  className?: string;
}

export default function useClassName({
  className,
  currentBreakpoint,
}: Props): string {
  const classNameComplete = useMemo(() => {
    const classArray = [
      "Grid",
      `bp-${currentBreakpoint.index}`,
      `bp-${currentBreakpoint.value}`,
    ];
    if (className) classArray.push(className);
    return classArray.join(" ");
  }, [className, currentBreakpoint.index]);
  return classNameComplete;
}
