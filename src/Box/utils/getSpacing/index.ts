import normalizeProps from "../normalizeProps";
import normalizeShortProp from "./normalizeShortProp";

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
  gap,
  colspan,
  breakpoints,
  props,
  prop,
}) {
  const short = normalizeShortProp(props[prop]);
  return {
    left: getSpacingValue({
      display,
      gap: gap.column,
      colspan,
      breakpoints,
      prop: props[`${prop}Left`] || short.left,
      counterProp: props[`${prop}Right`] || short.right,
    }),
    right: getSpacingValue({
      display,
      gap: gap.column,
      colspan,
      breakpoints,
      prop: props[`${prop}Right`] || short.right,
      counterProp: props[`${prop}Left`] || short.left,
    }),
    top: getSpacingValue({
      display,
      gap: gap.row,
      colspan,
      breakpoints,
      prop: props[`${prop}Top`] || short.top,
    }),
    bottom: getSpacingValue({
      display,
      gap: gap.row,
      colspan,
      breakpoints,
      prop: props[`${prop}Bottom`] || short.bottom,
    }),
  };
}
