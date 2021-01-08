import React from "react";

interface ContextPropsBasic {
  cssMode: "grid" | "flex";
  breakpoint?: {
    index: number;
    value: number;
  };
  breakpoints: number[];
  gutterX: string[];
  gutterY: string[];
  colspan: number;
  parentCols: number[];
  media: any[];
  controlIsVisible: boolean;
  controlColor: string;
}

interface ContextProps extends ContextPropsBasic {
  rest: { id: string; width: number[] }[];
  registerChildBox?: (childBox: {
    left: number[];
    right: number[];
    cols: number[];
    id: string;
  }) => void;
}

const Context = React.createContext<ContextProps | null>(null);

function useRaster(): ContextPropsBasic {
  const {
    cssMode,
    breakpoint,
    breakpoints,
    gutterX,
    gutterY,
    colspan,
    parentCols,
    media,
    controlIsVisible,
    controlColor,
  } = React.useContext(Context);
  return {
    cssMode,
    breakpoint,
    breakpoints,
    gutterX,
    gutterY,
    colspan,
    parentCols,
    media,
    controlIsVisible,
    controlColor,
  };
}

export { useRaster };

export default Context;
