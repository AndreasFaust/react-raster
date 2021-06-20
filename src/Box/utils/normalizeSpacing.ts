import normalizeProps from "./normalizeProps";

export default function normalizeSpacing(breakpoints, spacing) {
  return normalizeProps(breakpoints, spacing).map((spacingAtBreakpoint) => {
    if (typeof spacingAtBreakpoint !== "number") return null;
    return spacingAtBreakpoint;
  });
}
