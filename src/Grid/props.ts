import React, { HTMLProps } from "react";
import { AlignH, AlignV } from "../alignTypes";

export interface Props extends HTMLProps<HTMLElement> {
  alignH?: AlignH | AlignH[];
  alignV?: AlignV | AlignV[];
  attrs?: object;
  bottom?: string | string[];
  children?: React.ReactNode;
  className?: string;
  component?: React.ReactElement;

  breakpoints?: number[];
  colspan?: number | number[];
  control?: boolean;
  controlColor?: string;
  gapH?: string | string[];
  gapV?: string | string[];

  isControl?: boolean;

  left?: string | string[];
  position?: string | string[];
  right?: string | string[];
  css?: string | string[];
  tag?: string;
  top?: string | string[];
  // No use. Just to prevent TypeScript-error, when spreading props into a Grid-component.
  ref?: React.MutableRefObject<HTMLElement>;
}
