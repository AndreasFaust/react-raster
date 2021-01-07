import React from "react";

type TCssMode = "grid" | "flex" | null;

export default function useCssMode(cssModeFromProps?: TCssMode): TCssMode {
  const [cssMode, setCssMode] = React.useState<TCssMode>("grid");

  React.useEffect(() => {
    if (cssModeFromProps) {
      setCssMode(cssModeFromProps);
      return;
    }
    const supportsCSS = (window.CSS && window.CSS.supports) || false;
    const supportsGrid = supportsCSS
      ? supportsCSS("grid-template-rows", "none")
      : false;

    if (supportsGrid) {
      setCssMode("grid");
    } else {
      setCssMode("flex");
    }
  }, [cssMode, cssModeFromProps]);

  return cssMode;
}
