import normalizeProps from "./normalizeProps";

export default function getRows({ gap, cols, breakpoints, prop }) {
  const propNormalized = normalizeProps(breakpoints, prop);
  return propNormalized.map((propAtBreakpoint, index) => {
    if (typeof propAtBreakpoint === "number") {
      return `calc(((100% + ${gap[index]}) / ${cols[index]}) * ${propAtBreakpoint})`;
    }
    return null;
  });
}
