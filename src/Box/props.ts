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
  href?: string;
  left?: number | number[];
  onClick?: () => void;
  padding?: string | string[];
  right?: number | number[];
  style?: string | string[];
  tag?: string;
  top?: number | number[];
  order?: number | number[];
  innerHTML?: string;
}

export const defaultProps = {
  attrs: {},
  alignX: null,
  alignY: null,
  bottom: 0,
  children: null,
  className: null,
  cols: null,
  component: null,
  hasChildBoxes: null,
  href: null,
  left: 0,
  onClick: null,
  padding: null,
  right: 0,
  style: null,
  tag: "div",
  top: 0,
  order: null,
  innerHTML: null,
};
