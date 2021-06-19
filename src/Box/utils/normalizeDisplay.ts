import normalizeProps from "./normalizeProps";

export default function normalizeDisplay(breakpoints, props) {
  const displayNormalized = normalizeProps(breakpoints, props.display);
  return displayNormalized.map((display, index) => {
    if (display) return display;
    return "grid";
  });
}
