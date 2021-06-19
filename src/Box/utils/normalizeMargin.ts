import normalizeProps from "./normalizeProps";

export default function normalizeMargin(breakpoints, margin) {
  return normalizeProps(breakpoints, margin).map((marginAtBreakpoint) => {
    if (typeof marginAtBreakpoint !== "number") return null;
    return marginAtBreakpoint;
  });
}
