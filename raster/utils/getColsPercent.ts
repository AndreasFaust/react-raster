interface Props {
  cols: number[];
  left: number[];
  right: number[];
  parentCols: number[];
  cssMode: "grid" | "flex";
}

export default function getColsPercent({
  cols,
  left,
  right,
  parentCols,
  cssMode,
}: Props): number[] {
  if (cssMode === "grid") {
    return cols.map((col, index) => col + left[index] + right[index]);
  }
  return cols.map((col, index) => (col * 100) / parentCols[index]);
}
