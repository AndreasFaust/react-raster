import React from "react";
import getElements from "./getElements";
import restArrayGroupedByBreakpoint from "./restArrayGroupedByBreakpoint";
import groupElementsByBreakpoint from "./groupElementsByBreakpoint";
import regroupRestByElement from "./regroupRestByElement";

interface Props {
  children?: React.ReactNode;
  breakpoints: number[];
  colsTotal: number[];
  alignX: string[];
  alignXRaw: string | string[];
  cssMode: "flex" | "grid";
}

export default function getAlignmentXRest({
  children,
  breakpoints,
  colsTotal,
  alignX,
  alignXRaw,
  cssMode,
}: Props) {
  if (!children || cssMode === "flex" || !alignXRaw) return null;

  const elements = getElements({ children, breakpoints, colsTotal });
  const elementsGroupedByBreakpoint = groupElementsByBreakpoint({
    breakpoints,
    elements,
  });

  const rest = restArrayGroupedByBreakpoint({
    alignX,
    breakpoints: elementsGroupedByBreakpoint,
    colsTotal,
  });
  return regroupRestByElement(rest);
}
