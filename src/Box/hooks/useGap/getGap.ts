interface Gap {
  row?: string;
  column?: string;
}

interface Props {
  contextGap?: {
    row: string;
    column: string;
  };
  gap: Gap;
  gridGap: Gap;
  rowGap?: string;
  columnGap?: string;
  gridColumnGap?: string;
  gridRowGap?: string;
}

export default function getGap({
  contextGap,
  gap,
  gridGap,
  rowGap,
  columnGap,
  gridColumnGap,
  gridRowGap,
}: Props): { row: string; column: string } {
  if (
    !gap.row &&
    !gap.column &&
    !gridGap.row &&
    !gridGap.column &&
    !rowGap &&
    !columnGap &&
    !gridColumnGap &&
    !gridRowGap
  ) {
    return contextGap || { row: "0px", column: "0px" };
  }
  return {
    row: gridRowGap || rowGap || gap.row || gridGap.row || "0px",
    column: columnGap || gridColumnGap || gap.column || gridGap.column || "0px",
  };
}
