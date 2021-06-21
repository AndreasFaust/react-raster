export default function getColspan(colspan, paddingLeft, paddingRight) {
  return colspan.map((colspanAtBreakpoint, index) => {
    return (
      colspanAtBreakpoint -
      (paddingLeft[index] || 0) -
      (paddingRight[index] || 0)
    );
  });
}
