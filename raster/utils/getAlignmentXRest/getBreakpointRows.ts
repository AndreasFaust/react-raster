interface Props {
  children: { width: number[]; id: string }[];
  cols: number;
  index: number;
  alignX: string;
}

type Row = {
  ids: string[];
  width: number;
};

function getWidth(alignX: string, cols: number, rowWidth: number): number {
  switch (alignX) {
    case "center":
      return (cols - rowWidth) / 2;
    case "end":
      return cols - rowWidth;
    default:
      return null;
  }
}

export default function getBreakpointRows({
  index,
  cols,
  children,
  alignX,
}: Props): Row[] {
  const rows = [{ ids: [], width: 0 }];

  children.map((child) => {
    const currentRow = rows[rows.length - 1];
    if (currentRow.width + child.width[index] <= cols) {
      rows[rows.length - 1] = {
        ids: [...currentRow.ids, child.id],
        width: currentRow.width + child.width[index],
      };
    } else {
      rows.push({
        ids: [child.id],
        width: child.width[index],
      });
    }
  });

  return rows.map((row) => ({
    ...row,
    width: getWidth(alignX, cols, row.width),
  }));
}
