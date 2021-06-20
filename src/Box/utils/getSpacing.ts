import normalizeProps from "./normalizeProps";

export function getSpacingValue({ display, gap, cols, breakpoints, prop }) {
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
    left: getSpacingValue({
      display,
      gap: columnGap,
      cols,
      breakpoints,
      prop: props[`${prop}Left`],
    }),
    right: getSpacingValue({
      display,
      gap: columnGap,
      cols,
      breakpoints,
      prop: props[`${prop}Right`],
    }),
    top: getSpacingValue({
      display,
      gap: rowGap,
      cols,
      breakpoints,
      prop: props[`${prop}Top`],
    }),
    bottom: getSpacingValue({
      display,
      gap: rowGap,
      cols,
      breakpoints,
      prop: props[`${prop}Bottom`],
    }),
  };
}
