import getBreakpointRows from "./getBreakpointRows";

interface Props {
  childBoxes: { left: number[]; right: number[]; cols: number[]; id: string }[];
  cols: number[];
  breakpoints: number[];
  alignX: string[];
  cssMode: "flex" | "grid";
}

function sumup(a: number[], b: number[], c: number[]): number[] {
  return a.map((el, i) => el + b[i] + c[i]);
}

export default function getAlignmentXRest({
  childBoxes,
  alignX,
  cssMode,
  cols,
  breakpoints,
}: Props): { id: string; width: number[] }[] {
  if (!childBoxes.length || cssMode === "flex") return null;
  if (childBoxes.length === 1) {
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
  const children = childBoxes.map((childBox) => ({
    width: sumup(childBox.cols, childBox.left, childBox.right),
    id: childBox.id,
  }));

  const breakpointRows = breakpoints.map((_, index) => {
    return getBreakpointRows({
      index,
      children,
      cols: cols[index],
      alignX: alignX[index],
    });
  });

  const rest = children.map((child) => {
    return {
      id: child.id,
      width: breakpointRows.map((breakpointRow) => {
        return breakpointRow.find((row) =>
          row.ids.find((id: string) => id === child.id)
        ).width;
      }),
    };
  });
  return rest;
}
