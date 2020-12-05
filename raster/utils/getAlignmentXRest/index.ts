import restArrayGroupedByBreakpoint from "./restArrayGroupedByBreakpoint";
import groupElementsByBreakpoint from "./groupElementsByBreakpoint";
import regroupRestByElement from "./regroupRestByElement";

interface Props {
  childBoxes: { left: number[]; right: number[]; cols: number[] }[];
  breakpoints: number[];
  colsTotal: number[];
  alignX: string[];
  alignXRaw: string | string[];
  cssMode: "flex" | "grid";
}

function sumup(a: number[], b: number[], c: number[]): number[] {
  return a.map((el, i) => el + b[i] + c[i]);
}

export default function getAlignmentXRest({
  childBoxes,
  breakpoints,
  colsTotal,
  alignX,
  alignXRaw,
  cssMode,
}: Props) {
  if (!childBoxes.length || cssMode === "flex" || !alignXRaw) return null;

  const elements = childBoxes.map((childBox) => ({
    ...childBox,
    total: sumup(childBox.cols, childBox.left, childBox.right),
  }));
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
