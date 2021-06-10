import React from "react";
import styled from "styled-components";

import Container from "../Box/utils/container";

interface Props {
  attrs?: object;
  colspan: number[];
  className: string;
  gapH: string[];
  gapV: string[];
  alignH: string[];
  alignV: string[];
  media: any[];
  left: string[];
  right: string[];
  top: string[];
  bottom: string[];
  position: string[];
  tag: string;
  isControl: boolean;
  children: React.ReactNode;
  customStyles: string[];
  component?: React.ReactElement;
}

const controlStyles = `
  width: 100%;
  z-index: 10000;
  left: 0; 
  top: 0; 
  bottom: 0;
  margin: 0;
  grid-auto-rows: auto;
  pointer-events: none;
`;

const GridLayout = styled(Container)<Props>`
  display: grid;
  grid-auto-rows: min-content;
  box-sizing: border-box;
  ${(props) =>
    props.media.map((media, index) => {
      return media`
        grid-template-columns: repeat(${(props) => props.colspan[index]}, 1fr);
        grid-auto-columns: ${(props) => props.colspan[index]}fr;    
        position: ${props.position[index]};
        padding-left: ${props.left[index]};
        padding-right: ${props.right[index]};
        padding-top: ${props.top[index]};
        padding-bottom: ${props.bottom[index]};
        grid-column-gap: ${props.gapH[index]};
        grid-row-gap: ${props.gapV[index]};
        align-content: ${props.alignV[index]};
        align-items: ${props.alignV[index]};
        ${props.customStyles[index]}
        ${
          props.isControl && props.gapH[index] === "0px"
            ? "grid-column-gap: 1px;"
            : ""
        }
      `;
    })}
  ${(props) => props.isControl && controlStyles}
`;

const StyledGrid = React.forwardRef<HTMLElement, Props>((props, ref) => {
  return <GridLayout {...props} ref={ref} />;
});

export default StyledGrid;
