import React from "react";
import styled from "styled-components";

import Container from "./utils/container";

interface Props {
  alignH: string[];
  alignV: string[];
  attrs: object;
  bottom: string[];
  breakpoints: number[];
  children: React.ReactNode;
  className: string;
  cols: number[];
  colspan: number[];
  component?: React.ReactElement;
  controlColor: string;
  controlIsVisible: boolean;
  customStyles?: string[];
  gapH: string[];
  gapV: string[];
  height: string[];
  left: string[];
  media: any[];
  padding: string[];
  rest: string[];
  right: string[];
  tag: string;
  top: string[];
  order: number[];
}

// grid-template-columns: repeat(${(props) => props.colspan[index]}, 1fr);
// grid-auto-columns: ${(props) => props.colspan[index]}fr;
// position: ${props.position[index]};
// padding-left: ${props.left[index]};
// padding-right: ${props.right[index]};
// padding-top: ${props.top[index]};
// padding-bottom: ${props.bottom[index]};
// grid-column-gap: ${props.gapH[index]};
// grid-row-gap: ${props.gapV[index]};
// align-content: ${props.alignV[index]};
// align-items: ${props.alignV[index]};
// ${props.customStyles[index]}
// ${
//   props.isControl && props.gapH[index] === "0px"
//     ? "grid-column-gap: 1px;"
//     : ""
// }

const GridLayout = styled(Container)<Props>`
  box-sizing: border-box;

  ${(props) =>
    props.display === "grid" &&
    props.media.map((media, index) => {
      return media`
        grid-template-columns: repeat(${(props) => props.colspan[index]}, 1fr);
        grid-auto-columns: ${(props) => props.colspan[index]}fr;
        grid-auto-rows: min-content;
        grid-column-gap: ${props.gapH[index]};
        grid-row-gap: ${props.gapV[index]};
      `;
    })}
  ${(props) =>
    !props.hasChildBoxes &&
    props.media.map((media, index) => {
      if (
        props.alignH[index] === "flex-start" &&
        props.alignV[index] === "flex-start"
      )
        return "";
      return media`
        ${(props.alignH[index] || props.alignV[index]) && `display: flex;`}
        ${props.alignH[index] && `justify-content: ${props.alignH[index]};`}
        ${props.alignV[index] && `align-items: ${props.alignV[index]};`}
      `;
    })}
    
  ${(props) =>
    props.media.map((media, index) => {
      return media`
        position: relative;
        display: ${props.display[index]};
        grid-column: auto / span ${props.cols[index]};
        margin-left: ${props.left[index]};
        margin-right: ${props.right[index]};
        margin-top: ${props.top[index]};
        margin-bottom: ${props.bottom[index]};
        align-content: ${props.alignV[index]};
        align-items: ${props.alignV[index]};
        padding: ${props.padding[index]};
        order: ${props.order[index]};
        height: ${props.height[index]};

        ${props.customStyles[index]}
      `;
    })}

  ${(props) =>
    props.tag === "img" &&
    props.controlIsVisible &&
    `
    box-shadow: 0 0 999em ${props.controlColor} inset;
  `}
`;

const StyledBox = React.forwardRef<HTMLElement, Props>((props, ref) => {
  return <GridLayout {...props} ref={ref} />;
});

export default StyledBox;
