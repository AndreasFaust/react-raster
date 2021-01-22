import React from "react";
import debounce from "./debounce";

export default function useResizeObserver(
  ref: React.RefObject<HTMLElement | null>,
  onResize: (element: HTMLElement) => void
) {
  React.useEffect(() => {
    if (!ref.current || !onResize) return;

    const dOnResize = debounce(() => {
      if (onResize && ref.current) onResize(ref.current);
    }, 150);

    const observer = new ResizeObserver(dOnResize);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref.current]);
}
