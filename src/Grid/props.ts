import React from "react";
import { AlignX, AlignY } from "../alignTypes";

export interface Props {
  alignX?: AlignX | AlignX[];
  alignY?: AlignY | AlignY[];
  attrs?: object;
  bottom?: string | string[];
  breakpoints?: number[];
  children?: React.ReactNode;
  className?: string;
  colspan?: number | number[];
  component?: React.ReactElement;
  control?: boolean;
  controlColor?: string;
  cssMode?: "grid" | "flex";
  gutterX?: string | string[];
  gutterY?: string | string[];
  isControl?: boolean;
  left?: string | string[];
  position?: string | string[];
  right?: string | string[];
  style?: string | string[];
  tag?: string;
  top?: string | string[];
}
