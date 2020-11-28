import React from "react";

interface ContextProps {
  cssMode: "grid" | "flex";
  breakpoints: number[];
  gutterX: string[];
  gutterY: string[];
  colspan: number;
  parent: number[];
  media: any[];
  controlIsVisible: boolean;
  controlColor: string;
  register?: () => void;
}

const Context = React.createContext<ContextProps | null>(null);

export default Context;
