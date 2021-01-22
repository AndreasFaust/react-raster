import React from "react";

export default function useCombinedRefs(
  ref: React.ForwardedRef<HTMLElement | null>
) {
  const targetRef = React.useRef();

  React.useEffect(() => {
    if (!ref) return;
    if (typeof ref === "function") {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
}
