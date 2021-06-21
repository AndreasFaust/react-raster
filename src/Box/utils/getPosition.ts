export default function getPosition(position) {
  return position.map((propAtBreakpoint) => {
    return !propAtBreakpoint ? "relative" : propAtBreakpoint;
  });
}
