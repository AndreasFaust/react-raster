import React from "react";
import normalizeProps from "../normalizeProps";

interface Props {
  children: React.ReactNode;
  breakpoints: number[];
  colsTotal: number[];
}
function sumup(a: number[], b: number[], c: number[]): number[] {
  return a.map((el, i) => el + b[i] + c[i]);
}

export interface IElement {
  cols: number[];
  left: number[];
  right: number[];
  total: number[];
}

export default function getElements({
  children,
  breakpoints,
  colsTotal,
}: Props): IElement[] {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const { props } = child;
    const left = normalizeProps({ prop: props.left, breakpoints });
    const right = normalizeProps({ prop: props.right, breakpoints });
    const cols = normalizeProps({
      prop: props.cols,
      defaultProp: colsTotal,
      breakpoints,
    });
    const total = sumup(cols, left, right);
    return { left, right, cols, total };
  }).filter((el) => el);
}
