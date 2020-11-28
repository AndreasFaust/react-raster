import React from "react";

export default interface Props {
  breakpoints?: number[];
  colspan?: number;
  left?: string | string[];
  right?: string | string[];
  top?: string | string[];
  bottom?: string | string[];
  gutterX?: string | string[];
  gutterY?: string | string[];
  alignX?: string | string[];
  alignY?: string | string[];
  control?: boolean;
  controlColor?: string;
  position?: string | string[];
  className?: string;
  style?: string | string[];
  children?: React.ReactNode;
  tag?: string;
  attrs?: object;
  isControl?: boolean;
  cssMode?: "grid" | "flex";
}
