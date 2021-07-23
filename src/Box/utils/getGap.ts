import normalizeProps from "./normalizeProps";

interface Gap {
  row: string[];
  column: string[];
}

function getGapProp(breakpoints: number[], gap?: string[]): Gap {
  if (!gap) return { row: null, column: null };
  return normalizeProps(breakpoints, gap).reduce(
    (acc, item) => {
      const [row, column] = item.split(" ");
      return {
        row: [...acc.row, row],
        column: [...acc.column, column],
      };
    },
    { row: [], column: [] }
  );
}

const getGap = (props: any, context: any, breakpoints: number[]): Gap => {
  if (
    context.gap &&
    !props.gap &&
    !props.gridGap &&
    !props.rowGap &&
    !props.columnGap &&
    !props.gridColumnGap &&
    !props.gridRowGap
  ) {
    return context.gap;
  }

  const gap = getGapProp(breakpoints, props.gap);
  const gridGap = getGapProp(breakpoints, props.gridGap);

  return {
    row:
      (props.rowGap && normalizeProps(breakpoints, props.rowGap)) ||
      (props.gridRowGap && normalizeProps(breakpoints, props.gridRowGap)) ||
      gap.row ||
      gridGap.row ||
      normalizeProps(breakpoints, "0px"),
    column:
      (props.columnGap && normalizeProps(breakpoints, props.columnGap)) ||
      (props.gridColumnGap &&
        normalizeProps(breakpoints, props.gridColumnGap)) ||
      gap.column ||
      gridGap.column ||
      normalizeProps(breakpoints, "0px"),
  };
};

export default getGap;
