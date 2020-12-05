import React from "react";

interface ContextProps {
  cssMode: "grid" | "flex";
  breakpoints: number[];
  gutterX: string[];
  gutterY: string[];
  colspan: number;
  parentCols: number[];
  media: any[];
  controlIsVisible: boolean;
  controlColor: string;
  rest: number[];
  registerChildBox?: (childBox: {
    left: number[];
    right: number[];
    cols: number[];
  }) => void;
}

const Context = React.createContext<ContextProps | null>(null);

export default Context;
