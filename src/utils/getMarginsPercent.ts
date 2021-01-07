interface Props {
  margin: number[];
  cols: number[];
  parentCols: number[];
  cssMode: "grid" | "flex";
  gutterX: string[];
}

export default function getMarginsPercent({
  margin,
  cols,
  parentCols,
  cssMode,
  gutterX,
}: Props): (string | undefined)[] {
  if (cssMode === "grid") {
    return margin.map((mar, index) => {
      return mar
        ? `calc(((100% + ${gutterX[index]}) / ${cols[index]}) * ${mar})`
        : null;
    });
  }
  return margin.map((mar, index) => {
    return mar ? `${(mar * 100) / parentCols[index]}%` : undefined;
  });
}
