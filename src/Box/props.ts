import React from "react";
import { AlignX, AlignY } from "../alignTypes";

export interface Props {
  alignX?: AlignX | AlignX[];
  alignY?: AlignY | AlignY[];
  attrs?: object;
  bottom?: number | number[];
  children?: React.ReactNode;
  className?: string;
  cols?: number | number[];
  component?: React.ReactElement;
  hasChildBoxes?: boolean;
  height?: string | string[];
  href?: string;
  innerHTML?: string;
  left?: number | number[];
  onClick?: () => void;
  onResize?: (element: HTMLElement) => void;
  order?: number | number[];
  padding?: string | string[];
  right?: number | number[];
  style?: string | string[];
  tag?: string;
  top?: number | number[];
}
