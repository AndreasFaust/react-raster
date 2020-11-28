import React from "react";

type TCssMode = "grid" | "flex";

export default function useCssMode(initialValue?: TCssMode): TCssMode {
  const [cssMode, setCssMode] = React.useState(initialValue);

  React.useEffect(() => {
    if (cssMode) return;
    const supportsCSS = (window.CSS && window.CSS.supports) || false;
    const supportsGrid = supportsCSS
      ? supportsCSS("grid-template-rows", "none")
      : false;

    if (!supportsGrid) {
      setCssMode("flex");
    }
  }, []);

  return cssMode;
}
