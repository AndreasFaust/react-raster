import normalizeProps from "./normalizeProps";

function getSpacingSingle({ display, gap, cols, breakpoints, prop }) {
  const propNormalized = normalizeProps(breakpoints, prop);
  return propNormalized.map((propAtBreakpoint, index) => {
    switch (typeof propAtBreakpoint) {
      case "number":
        return display[index] === "grid"
          ? `calc(((100% + ${gap[index]}) / ${cols[index]}) * ${propAtBreakpoint})`
          : null;
      case "string":
      default:
        return propAtBreakpoint;
    }
  });
}

export default function getSpacing({
  display,
  rowGap,
  columnGap,
  cols,
  breakpoints,
  props,
  prop,
}) {
  return {
    left: getSpacingSingle({
      display,
      gap: columnGap,
      cols,
      breakpoints,
      prop: props[`${prop}Left`],
    }),
    right: getSpacingSingle({
      display,
      gap: columnGap,
      cols,
      breakpoints,
      prop: props[`${prop}Right`],
    }),
    top: getSpacingSingle({
      display,
      gap: rowGap,
      cols,
      breakpoints,
      prop: props[`${prop}Top`],
    }),
    bottom: getSpacingSingle({
      display,
      gap: rowGap,
      cols,
      breakpoints,
      prop: props[`${prop}Bottom`],
    }),
  };
}
