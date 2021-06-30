import normalizeProps from "./normalizeProps";

export default function normalizeDisplay(
  breakpoints: number[],
  props,
  hasChildBoxes: boolean
): string[] {
  const displayNormalized = normalizeProps(breakpoints, props.display);
  return displayNormalized.map((display) => {
    if (display) return display;
    return hasChildBoxes ? "grid" : "block";
  });
}
