import normalizeProps from "./normalizeProps";

export function getSpacingValue({
  gap,
  colspan,
  breakpoints,
  prop,
  counterProp,
}: any) {
  const propNormalized = normalizeProps(breakpoints, prop);
  const counterPropNormalized = normalizeProps(breakpoints, counterProp);
  return propNormalized.map((propAtBreakpoint, index) => {
    switch (typeof propAtBreakpoint) {
      case "number":
        if (counterPropNormalized[index]) {
          return `calc(((100% + ${gap[index]} - ${
            typeof counterPropNormalized[index] === "string"
              ? counterPropNormalized[index]
              : "0px"
          }) / ${colspan[index]}) * ${propAtBreakpoint})`;
        }
        return `calc(((100% + ${gap[index]}) / ${colspan[index]}) * ${propAtBreakpoint})`;
      default:
        return propAtBreakpoint;
    }
  });
}

export default function getSpacing({
  display,
  rowGap,
  columnGap,
  colspan,
  breakpoints,
  props,
  prop,
}) {
  return {
    left: getSpacingValue({
      display,
      gap: columnGap,
      colspan,
      breakpoints,
      prop: props[`${prop}Left`],
      counterProp: props[`${prop}Right`],
    }),
    right: getSpacingValue({
      display,
      gap: columnGap,
      colspan,
      breakpoints,
      prop: props[`${prop}Right`],
      counterProp: props[`${prop}Left`],
    }),
    top: getSpacingValue({
      display,
      gap: rowGap,
      colspan,
      breakpoints,
      prop: props[`${prop}Top`],
    }),
    bottom: getSpacingValue({
      display,
      gap: rowGap,
      colspan,
      breakpoints,
      prop: props[`${prop}Bottom`],
    }),
  };
}
