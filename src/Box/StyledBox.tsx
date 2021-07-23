import styled, { css } from "styled-components";
import React from "react";
import Container from "./Container";

type ValidProp = string | number;

interface Props {
  position: ValidProp;
  zIndex: ValidProp;
  display: ValidProp;
  colsTotal: ValidProp;
  colsEffective: ValidProp;

  width: ValidProp;
  minWidth?: ValidProp;
  maxWidth?: ValidProp;
  height: ValidProp;
  minHeight?: ValidProp;
  maxHeight?: ValidProp;

  padding: {
    left: string;
    right: string;
    top: string;
    bottom: string;
  };
  margin: {
    left: string;
    right: string;
    top: string;
    bottom: string;
  };

  order: ValidProp;

  top: ValidProp;
  bottom: ValidProp;
  left: ValidProp;
  right: ValidProp;

  alignItems: ValidProp;
  alignContent: ValidProp;
  alignSelf: ValidProp;
  justifyItems: ValidProp;
  justifyContent: ValidProp;
  justifySelf: ValidProp;

  background: ValidProp;
  backgroundColor: ValidProp;
  backgroundImage: ValidProp;
  backgroundPosition: ValidProp;
  backgroundSize: ValidProp;
  backgroundAttachment: ValidProp;

  filter: ValidProp;
  backdropFilter: ValidProp;
  mixBlendMode: ValidProp;
  backgroundBlendMode: ValidProp;
  textShadow: ValidProp;
  boxShadow: ValidProp;
  textStroke: ValidProp;

  color: ValidProp;
  fontFamily: ValidProp;
  fontSize: ValidProp;
  fontWeight: ValidProp;
  fontStyle: ValidProp;
  textAlign: ValidProp;
  lineHeight: ValidProp;
  letterSpacing: ValidProp;
  textDecoration: ValidProp;
  hyphens: ValidProp;

  border: ValidProp;
  borderLeft: ValidProp;
  borderRight: ValidProp;
  borderTop: ValidProp;
  borderBottom: ValidProp;

  gridColumn: ValidProp;
  gridRow: ValidProp;
  gridAutoRows: ValidProp;
  gridTemplateRows: ValidProp;
  gridTemplateColumns: ValidProp;
  autoFlow: ValidProp;

  gap: {
    row: string;
    column: string;
  };

  flexDirection: ValidProp;
  flexWrap: ValidProp;
  flexGrow: ValidProp;
  flexShrink: ValidProp;

  transition: ValidProp;
  animation: ValidProp;
  transform: ValidProp;
  opacity: ValidProp;

  controlColor: ValidProp;

  pointerEvents: ValidProp;
  cursor: ValidProp;

  overflow?: ValidProp;
  overflowX?: ValidProp;
  overflowY?: ValidProp;

  tag?: string;
  controlIsVisible: boolean;
  component?: React.ReactElement;
  className: string;
  styles: string;
  attrs: any;
  children: React.ReactNode;
  isControl: boolean;
}

const StyledBoxStyles = styled(Container)<Props>`
  box-sizing: border-box;

  ${(props) => css`
    position: ${props.position};
    z-index: ${props.zIndex};
    display: ${props.display};
    pointer-events: ${props.pointerEvents};
    cursor: ${props.cursor};

    width: ${props.width};
    min-width: ${props.minWidth};
    max-width: ${props.maxWidth};
    height: ${props.height};
    min-height: ${props.minHeight};
    max-height: ${props.maxHeight};

    padding-left: ${props.padding.left};
    padding-right: ${props.padding.right};
    padding-top: ${props.padding.top};
    padding-bottom: ${props.padding.bottom};

    margin-left: ${props.margin.left};
    margin-right: ${props.margin.right};
    margin-top: ${props.margin.top};
    margin-bottom: ${props.margin.bottom};

    order: ${props.order};

    top: ${props.top};
    bottom: ${props.bottom};
    left: ${props.left};
    right: ${props.right};

    align-items: ${props.alignItems};
    align-content: ${props.alignContent};
    align-self: ${props.alignSelf};
    justify-content: ${props.justifyContent};
    justify-items: ${props.justifyItems};
    justify-self: ${props.justifySelf};

    flex-direction: ${props.flexDirection};
    flex-wrap: ${props.flexWrap};
    flex-shrink: ${props.flexShrink};
    flex-grow: ${props.flexGrow};

    background: ${props.background};
    background-color: ${props.backgroundColor};
    background-image: ${props.backgroundImage};
    background-position: ${props.backgroundPosition};
    background-size: ${props.backgroundSize};
    background-attachment: ${props.backgroundAttachment};

    filter: ${props.filter};
    backdrop-filter: ${props.backdropFilter};
    mix-blend-mode: ${props.mixBlendMode};
    background-blend-mode: ${props.backgroundBlendMode};
    text-shadow: ${props.textShadow};
    box-shadow: ${props.boxShadow};
    -webkit-text-stroke: ${props.textStroke};
    text-stroke: ${props.textStroke};

    border: ${props.border};
    border-left: ${props.borderLeft};
    border-right: ${props.borderRight};
    border-top: ${props.borderTop};
    border-bottom: ${props.borderBottom};

    font-family: ${props.fontFamily};
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    font-style: ${props.fontStyle};
    text-align: ${props.textAlign};
    color: ${props.color};
    line-height: ${props.lineHeight};
    letter-spacing: ${props.letterSpacing};
    text-decoration: ${props.textDecoration};
    hyphens: ${props.hyphens};

    transition: ${props.transition};
    transform: ${props.transform};
    animation: ${props.animation};
    opacity: ${props.opacity};

    overflow: ${props.overflow};
    overflow-x: ${props.overflowX};
    overflow-y: ${props.overflowY};

    ${props.styles ? props.styles : ""}
  `}

  ${(props) =>
    props.display === "grid" &&
    css`
      grid-template-columns: repeat(${props.colsEffective}, 1fr);

      grid-auto-rows: ${props.gridAutoRows};
      grid-template-rows: ${props.gridTemplateRows};
      grid-template-columns: ${props.gridTemplateColumns};
      grid-auto-flow: ${props.autoFlow};

      grid-gap: ${props.gap.row} ${props.gap.column};

      ${props.isControl && props.gap.column === "0px"
        ? "grid-column-gap: 1px;"
        : ""}
    `}

  ${(props) =>
    props.display === "flex" &&
    css`
      gap: ${props.gap.row} ${props.gap.column};
    `}

  ${(props) => css`
    grid-column: auto / span ${props.colsTotal};
    grid-column: ${props.gridColumn};
    grid-row: ${props.gridRow};
  `}

  ${(props) =>
    props.as === "img" &&
    props.controlIsVisible &&
    css`
      box-shadow: 0 0 999em ${props.controlColor} inset;
    `}
`;
const StyledBox = React.forwardRef<HTMLElement, Props>((props, ref) => {
  return <StyledBoxStyles {...props} ref={ref} />;
});

export default React.memo(StyledBox);
