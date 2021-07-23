import React from "react";

export interface ContextProps {
  breakpoint: number;
  breakpoints?: number[];
  currentBreakpoint?: {
    index: number;
    value: number;
  };
  gap?: {
    row: string;
    column: string;
  };
  colspan?: number;
  controlIsVisible?: boolean;
  controlColor?: string;
  registerChildBox?: () => void;
}

const Context = React.createContext<ContextProps>({
  breakpoint: 0,
});

function useRaster(): ContextProps {
  return React.useContext(Context);
}

export { useRaster };

export default Context;
