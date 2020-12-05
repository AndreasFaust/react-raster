import React from "react";

type AlignX = "left" | "right" | "center";
type AlignY = "top" | "bottom" | "center";

export interface Props {
  breakpoints?: number[];
  colspan?: number;
  left?: string | string[];
  right?: string | string[];
  top?: string | string[];
  bottom?: string | string[];
  gutterX?: string | string[];
  gutterY?: string | string[];
  alignX?: AlignX | AlignX[];
  alignY?: AlignY | AlignY[];
  control?: boolean;
  controlColor?: string;
  position?: string | string[];
  className?: string;
  style?: string | string[];
  children?: React.ReactNode;
  tag?: string;
  attrs?: object;
  isControl?: boolean;
  cssMode?: "grid" | "flex";
}

export const defaultProps = {
  breakpoints: [0, 432, 768, 1024, 1200, 1400],
  left: "0",
  right: "0",
  top: "0",
  bottom: "0",
  gutterX: "0px",
  gutterY: "0px",
  alignX: null,
  alignY: null,
  colspan: 1,
  control: false,
  controlColor: "rgba(0, 0, 0, 0.1)",
  position: "relative",
  style: null,
  className: null,
  children: null,
  cssMode: null,
  tag: "div",
  attrs: {},
  isControl: false,
};
