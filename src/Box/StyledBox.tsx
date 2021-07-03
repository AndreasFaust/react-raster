import styled, { css } from "styled-components";
import React from "react";
import Container from "./utils/container";

interface Props {
  index: number;

  position: string[];
  zIndex: (string | number)[];
  display: string[];
  colsTotal: number[];

  width: string[];
  minWidth?: string[];
  maxWidth?: string[];
  height: string[];
  minHeight?: string[];
  maxHeight?: string[];

  padding: {
    left: (string | number)[];
    right: (string | number)[];
    top: (string | number)[];
    bottom: (string | number)[];
  };
  margin: {
    left: (string | number)[];
    right: (string | number)[];
    top: (string | number)[];
    bottom: (string | number)[];
  };

  order: (string | number)[];

  top: (string | number)[];
  bottom: (string | number)[];
  left: (string | number)[];
  right: (string | number)[];

  alignItems: string[];
  alignContent: string[];
  alignSelf: string[];
  justifyItems: string[];
  justifyContent: string[];
  justifySelf: string[];

  background: string[];
  backgroundColor: string[];
  backgroundImage: string[];
  backgroundPosition: string[];
  backgroundSize: string[];
  backgroundAttachment: string[];

  filter: string[];
  backdropFilter: string[];
  mixBlendMode: string[];
  backgroundBlendMode: string[];
  textShadow: string[];
  boxShadow: string[];
  textStroke: string[];

  color: string[];
  lineHeight: string[];
  letterSpacing: string[];
  textDecoration: string[];
  hyphens: string[];

  border: string[];
  borderLeft: string[];
  borderRight: string[];
  borderTop: string[];
  borderBottom: string[];

  colspan: number[];

  gridAutoRows: string[];
  gridTemplateRows: string[];
  gridTemplateColumns: string[];
  autoFlow: string[];

  gridColumnGap: string[];
  gridRowGap: string[];

  flexDirection: string[];
  flexWrap: string[];
  flexGrow: number[];
  flexShrink: number[];

  transition: string[];
  animation: string[];
  transform: string[];
  opacity: number[];

  tag?: string;
  controlIsVisible: boolean;
  controlColor: string;

  overflow?: string[];
  overflowX?: string[];
  overflowY?: string[];

  id: string;
  component?: React.ReactElement;
  className: string;
  styles: string[];
  attrs: any;
  children: React.ReactNode;
  isControl: boolean;
}

const StyledBoxStyles = styled(Container)<Props>`
  box-sizing: border-box;

  ${(props) => css`
    position: ${props.position[props.index]};
    z-index: ${props.zIndex[props.index]};
    display: ${props.display[props.index]};
    pointer-events: ${props.pointerEvents[props.index]};

    width: ${props.width[props.index]};
    min-width: ${props.minWidth[props.index]};
    max-width: ${props.maxWidth[props.index]};
    height: ${props.height[props.index]};
    min-height: ${props.minHeight[props.index]};
    max-height: ${props.maxHeight[props.index]};

    padding-left: ${props.padding.left[props.index]};
    padding-right: ${props.padding.right[props.index]};
    padding-top: ${props.padding.top[props.index]};
    padding-bottom: ${props.padding.bottom[props.index]};

    margin-left: ${props.margin.left[props.index]};
    margin-right: ${props.margin.right[props.index]};
    margin-top: ${props.margin.top[props.index]};
    margin-bottom: ${props.margin.bottom[props.index]};

    order: ${props.order[props.index]};

    top: ${props.top[props.index]};
    bottom: ${props.bottom[props.index]};
    left: ${props.left[props.index]};
    right: ${props.right[props.index]};

    align-items: ${props.alignItems[props.index]};
    align-content: ${props.alignContent[props.index]};
    align-self: ${props.alignSelf[props.index]};
    justify-content: ${props.justifyContent[props.index]};
    justify-items: ${props.justifyItems[props.index]};
    justify-self: ${props.justifySelf[props.index]};

    flex-direction: ${props.flexDirection[props.index]};
    flex-wrap: ${props.flexWrap[props.index]};
    flex-shrink: ${props.flexShrink[props.index]};
    flex-grow: ${props.flexGrow[props.index]};

    background: ${props.background[props.index]};
    background-color: ${props.backgroundColor[props.index]};
    background-image: ${props.backgroundImage[props.index]};
    background-position: ${props.backgroundPosition[props.index]};
    background-size: ${props.backgroundSize[props.index]};
    background-attachment: ${props.backgroundAttachment[props.index]};

    filter: ${props.filter[props.index]};
    backdrop-filter: ${props.backdropFilter[props.index]};
    mix-blend-mode: ${props.mixBlendMode[props.index]};
    background-blend-mode: ${props.backgroundBlendMode[props.index]};
    text-shadow: ${props.textShadow[props.index]};
    box-shadow: ${props.boxShadow[props.index]};
    -webkit-text-stroke: ${props.textStroke[props.index]};
    text-stroke: ${props.textStroke[props.index]};

    border: ${props.border[props.index]};
    border-left: ${props.borderLeft[props.index]};
    border-right: ${props.borderRight[props.index]};
    border-top: ${props.borderTop[props.index]};
    border-bottom: ${props.borderBottom[props.index]};

    font-family: ${props.fontFamily[props.index]};
    font-size: ${props.fontSize[props.index]};
    color: ${props.color[props.index]};
    line-height: ${props.lineHeight[props.index]};
    letter-spacing: ${props.letterSpacing[props.index]};
    text-decoration: ${props.textDecoration[props.index]};
    hyphens: ${props.hyphens[props.index]};

    transition: ${props.transition[props.index]};
    transform: ${props.transform[props.index]};
    animation: ${props.animation[props.index]};
    opacity: ${props.opacity[props.index]};

    overflow: ${props.overflow[props.index]};
    overflow-x: ${props.overflowX[props.index]};
    overflow-y: ${props.overflowY[props.index]};

    ${props.styles[props.index] ? props.styles[props.index] : ""}
  `}

  ${(props) =>
    props.display[props.index] === "grid" &&
    css`
      grid-template-columns: repeat(${props.colspan[props.index]}, 1fr);

      grid-auto-rows: ${props.gridAutoRows[props.index]};
      grid-template-rows: ${props.gridTemplateRows[props.index]};
      grid-template-columns: ${props.gridTemplateColumns[props.index]};
      grid-auto-flow: ${props.autoFlow[props.index]};

      grid-column-gap: ${props.gridColumnGap[props.index]};
      grid-row-gap: ${props.gridRowGap[props.index]};

      ${props.isControl && props.gridColumnGap[props.index] === "0px"
        ? "grid-column-gap: 1px;"
        : ""}
    `}

  ${(props) => css`
    grid-column: auto / span ${props.colsTotal[props.index]};
    grid-column: ${props.gridColumn[props.index]};
  `}

  ${(props) =>
    props.as === "img" &&
    props.controlIsVisible &&
    `
    box-shadow: 0 0 999em ${props.controlColor} inset;
  `}
`;
const StyledBox = React.forwardRef<HTMLElement, Props>((props, ref) => {
  return <StyledBoxStyles {...props} ref={ref} />;
});

export default StyledBox;
