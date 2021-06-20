import React, { HTMLProps } from "react";

type CoreProp = number | number[] | string | string[];

export interface Props
  extends Omit<HTMLProps<HTMLElement>, "cols" | "height" | "width"> {
  ////////////////////////////////////////
  // Core
  display?: string | string[];
  breakpoints?: number[];
  width?: CoreProp;
  height?: CoreProp;
  colspan?: number | number[];
  cols?: number | number[];

  marginLeft?: CoreProp;
  marginRight?: CoreProp;
  marginTop?: CoreProp;
  marginBottom?: CoreProp;

  paddingLeft?: CoreProp;
  paddingRight?: CoreProp;
  paddingTop?: CoreProp;
  paddingBottom?: CoreProp;

  rowGap?: string | string[];
  columnGap?: string | string[];

  templateRows?: string | string[];
  autoRows?: string | string[];
  templateColumns?: string | string[];
  autoFlow?: string | string[];

  ////////////////////////////////////////
  // Advanced
  component?: React.ReactElement;
  innerHTML?: string;
  onResize?: (element: HTMLElement) => void;
  css?: string | string[];
  tag?: string;
  control?: boolean;
  controlColor?: string;

  ////////////////////////////////////////
  // basic CSS
  order?: number | number[];

  position?: string | string[];
  zIndex?: CoreProp;
  top?: string | string[];
  bottom?: string | string[];
  left?: string | string[];
  right?: string | string[];

  alignItems?: string | string[];
  alignContent?: string | string[];
  alignSelf?: string | string[];
  justifyContent?: string | string[];
  justifySelf?: string | string[];

  background?: string | string[];
  backgroundColor?: string | string[];
  backgroundImage?: string | string[];
  backgroundPosition?: string | string[];
  backgroundSize?: string | string[];
  backgroundAttachment?: string | string[];

  border?: string | string[];
  borderLeft?: string | string[];
  borderRight?: string | string[];
  borderTop?: string | string[];
  borderBottom?: string | string[];

  ////////////////////////////////////////
  // utility
  className?: string;
  children?: React.ReactNode;
  // isControl?: boolean;
  // No use. Just to prevent TypeScript-error, when spreading props into a Grid-component.
  ref?: React.MutableRefObject<HTMLElement>;
}
