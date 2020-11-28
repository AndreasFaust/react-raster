import React from "react";

export default interface Props {
  cols?: number | number[];
  left?: number | number[];
  right?: number | number[];
  top?: number | number[];
  bottom?: number | number[];
  padding?: string | string[];
  alignX?: string | string[];
  alignY?: string | string[];
  style?: string | string[];
  tag?: string;
  attrs?: object;
  hasChildBoxes?: boolean;
  className?: string;
  children?: React.ReactNode;
  rest?: string[];
  href?: string;
  onClick?: () => void;
}
