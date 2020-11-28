import { IElement } from "./getElements";

interface Props {
  breakpoints: number[];
  elements: IElement[];
}

interface ElementAtBreakpoint {
  cols: number;
  left: number;
  right: number;
  total: number;
}

export default function groupElementsByBreakpoint({
  breakpoints,
  elements,
}: Props): ElementAtBreakpoint[][] {
  const elementsRestructured = [];
  breakpoints.forEach((_, index) => {
    const elementAtBreakpoint = [];
    elements.forEach((element) => {
      elementAtBreakpoint.push({
        cols: element.cols[index],
        left: element.left[index],
        right: element.right[index],
        total: element.total[index],
      });
    });
    elementsRestructured.push(elementAtBreakpoint);
  });
  return elementsRestructured;
}
