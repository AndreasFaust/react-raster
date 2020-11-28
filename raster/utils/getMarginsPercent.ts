interface Props {
  margin: number[];
  cols: number[];
  parent: number[];
  cssMode: "grid" | "flex";
  gutterX: string[];
}

type Treturn = (string | undefined)[];

export default function getMarginsPercent({
  margin,
  cols,
  parent,
  cssMode,
  gutterX,
}: Props): Treturn {
  if (cssMode === "grid") {
    return margin.map((mar, index) => {
      return mar
        ? `calc(((100% + ${gutterX[index]}) / ${cols[index]}) * ${mar})`
        : undefined;
    });
  }
  return margin.map((mar, index) => {
    return mar ? `${(mar * 100) / parent[index]}%` : undefined;
  });
}
