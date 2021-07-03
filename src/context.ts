import React from "react";

export interface ContextProps {
  breakpoint?: {
    index: number;
    value: number;
  };
  breakpoints?: number[];
  gridRowGap?: string[];
  gridColumnGap?: string[];
  colspan?: number[];
  controlIsVisible?: boolean;
  controlColor?: string;
  registerChildBox?: () => void;
}

const Context = React.createContext<ContextProps>({
  breakpoint: { index: 1, value: 0 },
});

function useRaster(): ContextProps {
  return React.useContext(Context);
}

export { useRaster };

export default Context;
