interface Props {
  childBoxes: { left: number[]; right: number[]; cols: number[] }[];
  cols: number[];
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
}: Props) {
  if (!childBoxes.length || cssMode === "flex") return null;
  if (childBoxes.length === 1) {
    return sumup(
      childBoxes[0].cols,
      childBoxes[0].left,
      childBoxes[0].right
    ).map((width: number, index: number) => {
      return alignX[index] === "center" ? (cols[index] - width) / 2 : null;
    });
  }
  const rest = childBoxes
    .map((childBox) => sumup(childBox.cols, childBox.left, childBox.right))
    .reduce((acc, currentValue, _, array) => {
      return acc.map((accWidth, index) =>
        alignX[index] === "center"
          ? (cols[index] - (accWidth + currentValue[index])) / 2
          : null
      );
    });
  return rest;
}
