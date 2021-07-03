import normalizeProps from "./normalizeProps";

export default function normalizeDisplay(
  breakpoints: number[],
  display: string | string[],
  hasChildBoxes: boolean
): string[] {
  const displayNormalized = normalizeProps(breakpoints, display);
  return displayNormalized.map((displayValue) => {
    if (displayValue) return displayValue;
    return hasChildBoxes ? "grid" : "block";
  });
}
