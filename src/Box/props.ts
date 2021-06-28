import React, { HTMLProps } from "react";

export interface Props
  extends Omit<HTMLProps<HTMLElement>, "cols" | "height" | "width"> {
  ////////////////////////////////////////
  // Core
  display?: string | string[];
  breakpoints?: number[];
  width?: string | string[];
  minWidth?: string | string[];
  maxWidth?: string | string[];
  height?: string | string[];
  minHeight?: string | string[];
  maxHeight?: string | string[];
  colspan?: number | number[];
  cols?: number | number[];

  margin?: string | number | (string | number)[];
  marginLeft?: string | number | (string | number)[];
  marginRight?: string | number | (string | number)[];
  marginTop?: string | number | (string | number)[];
  marginBottom?: string | number | (string | number)[];

  padding?: string | number | (string | number)[];
  paddingLeft?: string | number | (string | number)[];
  paddingRight?: string | number | (string | number)[];
  paddingTop?: string | number | (string | number)[];
  paddingBottom?: string | number | (string | number)[];

  gridRowGap?: string | string[];
  gridColumnGap?: string | string[];

  gridTemplateRows?: string | string[];
  gridAutoRows?: string | string[];
  gridTemplateColumns?: string | string[];
  gridColumn?: string | string[];
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
  zIndex?: string | number | (string | number)[];
  top?: string | number | (string | number)[];
  bottom?: string | number | (string | number)[];
  left?: string | number | (string | number)[];
  right?: string | number | (string | number)[];

  alignItems?: string | string[];
  alignContent?: string | string[];
  alignSelf?: string | string[];
  justifyContent?: string | string[];
  justifyItems?: string | string[];
  justifySelf?: string | string[];

  flexShrink?: number | number[];
  flexGrow?: number | number[];
  flexDirection?: string | string[];
  flexWrap?: string | string[];

  background?: string | string[];
  backgroundColor?: string | string[];
  backgroundImage?: string | string[];
  backgroundPosition?: string | string[];
  backgroundSize?: string | string[];
  backgroundAttachment?: string | string[];

  color?: string | string[];
  fontFamily?: string | string[];
  fontSize?: string | string[];
  lineHeight?: string | string[];
  letterSpacing?: string | string[];
  textDecoration?: string | string[];

  border?: string | string[];
  borderLeft?: string | string[];
  borderRight?: string | string[];
  borderTop?: string | string[];
  borderBottom?: string | string[];

  ////////////////////////////////////////
  // utility
  className?: string;
  children?: React.ReactNode;
  isControl?: boolean;
  // No use. Just to prevent TypeScript-error, when spreading props into a Grid-component.
  ref?: React.MutableRefObject<HTMLElement>;
}
