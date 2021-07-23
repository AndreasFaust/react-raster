import React, { HTMLProps } from "react";

export interface Props
  extends Omit<HTMLProps<HTMLElement>, "cols" | "height" | "width" | "color"> {
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
  cols?: string | number | (string | number)[];

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

  gap?: string | string[];
  gridGap?: string | string[];
  gridRowGap?: string | string[];
  rowGap?: string | string[];
  gridColumnGap?: string | string[];
  columnGap?: string | string[];

  gridTemplateRows?: string | string[];
  gridAutoRows?: string | string[];
  gridTemplateColumns?: string | string[];
  gridColumn?: string | string[];
  gridRow?: string | string[];
  autoFlow?: string | string[];

  overflow?: string | string[];
  overflowX?: string | string[];
  overflowY?: string | string[];
  pointerEvents?: string | string[];
  cursor?: string | string[];

  ////////////////////////////////////////
  // Advanced
  component?: React.ReactElement;
  innerHTML?: string;
  onResize?: (element: HTMLElement) => void;
  onIntersect?: (
    IntersectionObserverEntry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => void;
  root?: null | HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];

  styles?: string | string[];
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

  filter?: string | string[];
  backdropFilter?: string | string[];
  mixBlendMode?: string | string[];
  backgroundBlendMode?: string | string[];
  textShadow?: string | string[];
  boxShadow?: string | string[];
  textStroke?: string | string[];

  color?: string | string[];
  fontFamily?: string | string[];
  fontSize?: string | string[];
  fontWeight?: string | string[];
  fontStyle?: string | string[];
  textAlign?: string | string[];
  lineHeight?: string | string[];
  letterSpacing?: string | string[];
  textDecoration?: string | string[];
  hyphens?: string | string[];

  border?: string | string[];
  borderLeft?: string | string[];
  borderRight?: string | string[];
  borderTop?: string | string[];
  borderBottom?: string | string[];

  transition?: string | string[];
  animation?: string | string[];
  transform?: string | string[];
  opacity?: number | number[];

  ////////////////////////////////////////
  // utility
  className?: string;
  children?: React.ReactNode;
  isControl?: boolean;
  // No use. Just to prevent TypeScript-error, when spreading props into a Grid-component.
  ref?: React.MutableRefObject<HTMLElement>;
}
