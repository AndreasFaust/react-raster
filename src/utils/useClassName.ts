import { useMemo } from "react";

export default function useClassName(
  className: string,
  breakpoint: { index: number; value: number }
): string {
  const classNameComplete = useMemo(() => {
    const classArray = [
      "Grid",
      `bp-${breakpoint.index}`,
      `bp-${breakpoint.value}`,
    ];
    if (className) classArray.push(className);
    return classArray.join(" ");
  }, [className, breakpoint.index]);
  return classNameComplete;
}
