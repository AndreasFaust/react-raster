interface Props {
  cols: number[];
  left: number[];
  right: number[];
}

export default function getColsTotal({ cols, left, right }: Props): number[] {
  return cols.map((col, index) => col + left[index] + right[index]);
}
