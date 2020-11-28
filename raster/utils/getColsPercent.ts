interface Props {
  cols: number[];
  left: number[];
  right: number[];
  parent: number[];
  cssMode: "grid" | "flex";
}

export default function getColsPercent({
  cols,
  left,
  right,
  parent,
  cssMode,
}: Props): number[] {
  if (cssMode === "grid") {
    return cols.map((col, index) => col + left[index] + right[index]);
  }
  return cols.map((col, index) => (col * 100) / parent[index]);
}
