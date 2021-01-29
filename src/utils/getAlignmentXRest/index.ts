import React from "react";
import getBreakpointRows from "./getBreakpointRows";
import normalizeProps from "../normalizeProps";

interface ChildBox {
  left: number[];
  right: number[];
  cols: number[];
  id: string;
}

interface Props {
  childBoxes: ChildBox[];
  cols: number[];
  breakpoints: number[];
  alignX: string[];
  cssMode: "flex" | "grid";
  children?: React.ReactNode;
}

function sumup(a: number[], b: number[], c: number[]): number[] {
  return a.map((el, i) => el + b[i] + c[i]);
}

function transformChildBoxes(
  childBoxes: ChildBox[]
): { width: number[]; id: string }[] {
  return childBoxes.map((childBox) => ({
    width: sumup(childBox.cols, childBox.left, childBox.right),
    id: childBox.id,
  }));
}

function normalizeChildren(children: React.ReactNode, breakpoints): ChildBox[] {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return {
      cols: normalizeProps({ prop: child.props.cols || 0, breakpoints }),
      left: normalizeProps({ prop: child.props.left || 0, breakpoints }),
      right: normalizeProps({ prop: child.props.right || 0, breakpoints }),
      id: child.props.id,
    };
  });
}

export default function getAlignmentXRest({
  childBoxes,
  alignX,
  cssMode,
  cols,
  breakpoints,
  children,
}: Props): { id: string; width: number[] }[] {
  if (cssMode === "flex") return null;
  if (childBoxes.length === 1) {
    console.log("test!");
    return [
      {
        id: childBoxes[0].id,
        width: sumup(
          childBoxes[0].cols,
          childBoxes[0].left,
          childBoxes[0].right
        ).map((width: number, index: number) => {
          return alignX[index] === "center" ? (cols[index] - width) / 2 : null;
        }),
      },
    ];
  }
  const childBoxesOrChildren = childBoxes.length
    ? childBoxes
    : normalizeChildren(children, breakpoints);

  if (!childBoxesOrChildren) return null;

  const childBoxesTransformed = transformChildBoxes(childBoxesOrChildren);

  const breakpointRows = breakpoints.map((_, index) => {
    return getBreakpointRows({
      index,
      children: childBoxesTransformed,
      cols: cols[index],
      alignX: alignX[index],
    });
  });

  const rest = childBoxesTransformed.map((child) => {
    return {
      id: child.id,
      width: breakpointRows.map((breakpointRow) => {
        const element = breakpointRow.find((row) =>
          row.ids.find((id: string) => id === child.id)
        );
        return element ? element.width : 0;
      }),
    };
  });
  return rest;
}
