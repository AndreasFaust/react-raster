import React, { HTMLProps } from "react";

export interface Props
  extends Omit<HTMLProps<HTMLElement>, "cols" | "height" | "width"> {
  ////////////////////////////////////////
  // Core
  display?: string | string[];
  breakpoints?: number[];
  width?: Array<string | number>;
  height?: Array<string | number>;
  colspan?: number | number[];
  cols?: number | number[];

  marginLeft?: Array<string | number>;
  marginRight?: Array<string | number>;
  marginTop?: Array<string | number>;
  marginBottom?: Array<string | number>;

  paddingLeft?: Array<string | number>;
  paddingRight?: Array<string | number>;
  paddingTop?: Array<string | number>;
  paddingBottom?: Array<string | number>;

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
  as?: string;
  control?: boolean;
  controlColor?: string;

  ////////////////////////////////////////
  // basic CSS
  order?: number | number[];

  position?: string | string[];
  zIndex?: Array<string | number>;
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
  // No use. Just to prevent TypeScript-error, when spreading props into a Grid-component.
  ref?: React.MutableRefObject<HTMLElement>;
}
