import React from "react";

interface ContextProps {
  breakpoint?: {
    index: number;
    value: number;
  };
  breakpoints?: number[];
  gapH?: string[];
  gapV?: string[];
  colspan?: number;
  parentCols?: number[];
  media?: any[];
  controlIsVisible?: boolean;
  controlColor?: string;
  rest?: { id: string; width: number[] }[];
  registerChildBox?: (childBox: {
    left: number[];
    right: number[];
    cols: number[];
    id: string;
  }) => void;
}

const Context = React.createContext<ContextProps>({
  // breakpoint: { index: 0, value: 0 },
  // breakpoints: [0],
  // cssMode: "grid",
});

function useRaster(): ContextProps {
  return React.useContext(Context);
}

export { useRaster };

export default Context;
