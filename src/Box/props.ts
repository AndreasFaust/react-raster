import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { AlignX, AlignY } from "../alignTypes";

export interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  alignX?: AlignX | AlignX[];
  alignY?: AlignY | AlignY[];
  bottom?: number | number[];
  children?: React.ReactNode;
  className?: string;
  cols?: number | number[];
  component?: React.ReactElement;
  hasChildBoxes?: boolean;
  height?: string | string[];
  innerHTML?: string;
  left?: number | number[];
  onResize?: (element: HTMLElement) => void;
  order?: number | number[];
  padding?: string | string[];
  right?: number | number[];
  css?: string | string[];
  tag?: string;
  top?: number | number[];
  // No use. Just to prevent TypeScript-error, when spreading props into a Grid-component.
  ref?: React.MutableRefObject<HTMLElement>;
}
