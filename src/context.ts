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
  media?: any[];
  controlIsVisible?: boolean;
  controlColor?: string;
  registerChildBox?: () => void;
}

const Context = React.createContext<ContextProps>({});

function useRaster(): ContextProps {
  return React.useContext(Context);
}

export { useRaster };

export default Context;
