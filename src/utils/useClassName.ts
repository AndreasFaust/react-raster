import { useMemo } from "react";

export default function useClassName(
  className: string,
  breakpoint: { index: number; value: number }
): string {
  const classNameComplete = useMemo(() => {
    return [
      "Grid",
      `bp-${breakpoint.index}`,
      `bp-${breakpoint.value}`,
      className,
    ].join(" ");
  }, [className, breakpoint.index]);
  return classNameComplete;
}
