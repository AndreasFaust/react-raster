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
  colspan?: number;
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

export const defaultProps = {
  alignX: null,
  alignY: null,
  attrs: {},
  bottom: "0",
  breakpoints: [0, 432, 768, 1024, 1200, 1400],
  children: null,
  className: null,
  colspan: 1,
  component: null,
  control: false,
  controlColor: "rgba(0, 0, 0, 0.1)",
  cssMode: null,
  gutterX: "0px",
  gutterY: "0px",
  isControl: false,
  left: "0",
  position: "relative",
  right: "0",
  tag: "div",
  top: "0",
  style: null,
};
