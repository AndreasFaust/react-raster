import React from "react";
import styled from "styled-components";

import Container from "../utils/container";

interface Props {
  cssMode: "grid" | "flex";
  breakpoints: number[];
  className: string;
  cols: number[];
  rest: string[];
  media: any[];
  gutterX: string[];
  gutterY: string[];
  colspan: number[];
  hasChildBoxes: boolean;
  alignX: string[];
  alignY: string[];
  tag: string;
  left: string[];
  right: string[];
  top: string[];
  bottom: string[];
  padding: string[];
  controlIsVisible: boolean;
  controlColor: string;
  style?: string[];
  attrs: object;
  children: React.ReactNode;
  component: React.ReactElement;
}

const GridLayout = styled(Container)<Props>`
  box-sizing: border-box;
  ${(props) => props.hasChildBoxes && "display: grid;"};

  ${(props) =>
    props.hasChildBoxes &&
    props.media.map((media, index) => {
      return media`
      grid-template-columns: repeat(${(props) => props.colspan[index]}, 1fr);
      grid-auto-columns: ${(props) => props.colspan[index]}fr;
      grid-auto-rows: min-content;
      grid-column-gap: ${props.gutterX[index]};
      grid-row-gap: ${props.gutterY[index]};
    `;
    })}
  ${(props) =>
    !props.hasChildBoxes &&
    props.media.map((media, index) => {
      if (
        props.alignX[index] === "flex-start" &&
        props.alignY[index] === "flex-start"
      )
        return "";
      return media`
        ${(props.alignX[index] || props.alignY[index]) && `display: flex;`}
        ${props.alignX[index] && `justify-content: ${props.alignX[index]};`}
        ${props.alignY[index] && `align-items: ${props.alignY[index]};`}
      `;
    })}
    
  ${(props) =>
    props.media.map((media, index) => {
      return media`
        ${!props.colspan[index] ? "display: none;" : ""}
        position: relative;
        grid-column: auto / span ${props.cols[index]};
        left: ${props.rest[index]};
        margin-left: ${props.left[index]};
        margin-right: ${props.right[index]};
        margin-top: ${props.top[index]};
        margin-bottom: ${props.bottom[index]};
        align-content: ${props.alignY[index]};
        align-items: ${props.alignY[index]};
        padding: ${props.padding[index]};
        ${props.style[index]}
      `;
    })}

  ${(props) =>
    props.tag === "img" &&
    props.controlIsVisible &&
    `
    box-shadow: 0 0 999em ${props.controlColor} inset;
  `}
`;

const FlexBox = styled(Container)<Props>`
  display: flex;
  box-sizing: border-box;

  ${(props) =>
    props.media.map((media, index) => {
      return media`
        width: ${props.cols[index]}%;
        
        padding-left: calc(${props.gutterX[index]} / 2);
        padding-right: calc(${props.gutterX[index]} / 2);
        padding-top: calc(${props.gutterY[index]} / 2);
        padding-bottom: calc(${props.gutterY[index]} / 2);

        margin-left: ${props.left[index]};
        margin-right: ${props.right[index]};
        margin-top: ${props.top[index]};
        margin-bottom: ${props.bottom[index]};
      `;
    })}
`;

const StyledBox = React.forwardRef<HTMLElement, Props>((props, ref) => {
  switch (props.cssMode) {
    case "flex":
      return <FlexBox {...props} ref={ref} />;
    case "grid":
      return <GridLayout {...props} ref={ref} />;
  }
});

export default StyledBox;
