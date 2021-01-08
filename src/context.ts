import React from "react";

interface ContextProps {
  cssMode: "grid" | "flex" | null;
  breakpoint: {
    index: number;
    value: number;
  };
  breakpoints: number[] | null;
  gutterX: string[] | null;
  gutterY: string[] | null;
  colspan: number | null;
  parentCols: number[] | null;
  media: any[] | null;
  controlIsVisible: boolean | null;
  controlColor: string | null;
  rest: { id: string; width: number[] }[] | null;
  registerChildBox?: (childBox: {
    left: number[];
    right: number[];
    cols: number[];
    id: string;
  }) => void | null;
}

const Context = React.createContext<ContextProps>({
  breakpoint: { index: 0, value: 0 },
  breakpoints: null,
  cssMode: null,
  gutterX: null,
  gutterY: null,
  colspan: null,
  parentCols: null,
  media: null,
  controlIsVisible: null,
  controlColor: null,
  rest: null,
  registerChildBox: null,
});

function useRaster(): ContextProps {
  return React.useContext(Context);
}

export { useRaster };

export default Context;
