export default function regroupRestByElement(rest: number[][]): number[][] {
  const rests = [];
  rest.forEach((breakpoint) => {
    breakpoint.forEach((rest, bpIndex) => {
      if (!rests[bpIndex]) {
        rests[bpIndex] = [rest];
      } else {
        rests[bpIndex] = [...rests[bpIndex], rest];
      }
    });
  });
  return rests;
}
