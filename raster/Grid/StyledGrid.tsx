import React from "react";
import styled from "styled-components";

import Container from "../utils/container";

interface Props {
  attrs?: object;
  colspan: number;
  className: string;
  gutterX: string[];
  gutterY: string[];
  alignX: string[];
  alignY: string[];
  media: any[];
  left: string[];
  right: string[];
  top: string[];
  bottom: string[];
  position: string[];
  tag: string;
  isControl: boolean;
  children: React.ReactNode;
  cssMode: "grid" | "flex";
  style: string[];
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
  grid-template-columns: repeat(${(props) => props.colspan}, 1fr);
  grid-auto-columns: ${(props) => props.colspan}fr;
  grid-auto-rows: min-content;
  box-sizing: border-box;
  ${(props: Props) =>
    props.media.map((media, index) => {
      return media`
      position: ${(props: Props) => props.position[index]};
      padding-left: ${props.left[index]};
      padding-right: ${props.right[index]};
      padding-top: ${props.top[index]};
      padding-bottom: ${props.bottom[index]};
      grid-column-gap: ${props.gutterX[index]};
      grid-row-gap: ${props.gutterY[index]};
      align-content: ${(props: Props) => props.alignY[index]};
      align-items: ${(props: Props) => props.alignY[index]};
      ${props.style[index]}
      ${
        props.isControl && props.gutterX[index] === "0px"
          ? "grid-column-gap: 1px;"
          : ""
      }
    `;
    })}
  ${(props) => props.isControl && controlStyles}
`;

const FlexBox = styled(Container)<Props>`
  display: flex;
  align-items: stretch;
  box-sizing: border-box;

  ${(props) =>
    props.media.map((media, index) => {
      return media`
      position: ${(props) => props.position[index]};
      padding-left: ${props.left[index]};
      padding-right: ${props.right[index]};
      padding-top: ${props.top[index]};
      padding-bottom: ${props.bottom[index]};
      ${props.style[index]}
    `;
    })}
  ${(props) => props.isControl && controlStyles}
`;

const StyledGrid = React.forwardRef<HTMLElement, Props>((props, ref) => {
  switch (props.cssMode) {
    case "flex":
      return <FlexBox {...props} ref={ref} />;
    case "grid":
      return <GridLayout {...props} ref={ref} />;
  }
});

export default StyledGrid;
