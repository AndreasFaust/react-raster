import normalizeProps from "./normalizeProps";
import normalizeShortProp from "./getSpacing/normalizeShortProp";

export default function normalizeSpacing(
  breakpoints,
  spacingSpecific,
  spacingShort
) {
  // const short = normalizeProps(breakpoints, normalizeShortProp(spacingShort));
  // console.log(spacingShort);
  // console.log(short);
  return normalizeProps(breakpoints, spacingSpecific).map(
    (spacingAtBreakpoint, index) => {
      if (typeof spacingAtBreakpoint !== "number") return null;
      return spacingAtBreakpoint;
    }
  );
}
