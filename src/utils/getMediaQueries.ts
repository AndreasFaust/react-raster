// @ts-nocheck
import { css } from "styled-components";

export default function getMediaQueries(breakpoints: number[]): any {
  const breakpointsLength: number = breakpoints.length;
  return breakpoints.map((bp, index) => {
    const max: string =
      index !== breakpointsLength - 1
        ? ` and (max-width: ${breakpoints[index + 1] - 1}px)`
        : "";

    return (...args: TemplateStringsArray) => {
      return css`
        @media (min-width: ${bp}px) ${max} {
          ${css(...args)};
        }
      `;
    };
  });
}
