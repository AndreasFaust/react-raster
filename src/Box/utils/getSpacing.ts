import normalizeProps from "./normalizeProps";

function getSpacingSingle({ display, gap, colspan, breakpoints, prop }) {
  const propNormalized = normalizeProps(breakpoints, prop);
  return propNormalized.map((propAtBreakpoint, index) => {
    switch (typeof propAtBreakpoint) {
      case "number":
        return display[index] === "grid"
          ? `calc(((100% + ${gap[index]}) / ${colspan[index]}) * ${propAtBreakpoint})`
          : null;
      case "string":
      default:
        return propAtBreakpoint;
    }
  });
}

export default function getSpacing({
  display,
  gapH,
  gapV,
  colspan,
  breakpoints,
  props,
  prop,
}) {
  return {
    left: getSpacingSingle({
      display,
      gap: gapH,
      colspan,
      breakpoints,
      prop: props[`${prop}Left`],
    }),
    right: getSpacingSingle({
      display,
      gap: gapH,
      colspan,
      breakpoints,
      prop: props[`${prop}right`],
    }),
    top: getSpacingSingle({
      display,
      gap: gapV,
      colspan,
      breakpoints,
      prop: props[`${prop}top`],
    }),
    bottom: getSpacingSingle({
      display,
      gap: gapV,
      colspan,
      breakpoints,
      prop: props[`${prop}bottom`],
    }),
  };
}
