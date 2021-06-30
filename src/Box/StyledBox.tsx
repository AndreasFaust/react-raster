import styled from "styled-components";
import React from "react";
import Container from "./utils/container";

interface Props {
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

  media: any;
  tag?: string;
  controlIsVisible: boolean;
  controlColor: string;

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

  ${(props) =>
    props.media.map((media, index: number) => {
      return media`
        position: ${props.position[index]};
        z-index: ${props.zIndex[index]};
        display: ${props.display[index]};

        width: ${props.width[index]};
        min-width: ${props.minWidth[index]};
        max-width: ${props.maxWidth[index]};
        height: ${props.height[index]};
        min-height: ${props.minHeight[index]};
        max-height: ${props.maxHeight[index]};

        padding-left: ${props.padding.left[index]};
        padding-right: ${props.padding.right[index]};
        padding-top: ${props.padding.top[index]};
        padding-bottom: ${props.padding.bottom[index]};

        margin-left: ${props.margin.left[index]};
        margin-right: ${props.margin.right[index]};
        margin-top: ${props.margin.top[index]};
        margin-bottom: ${props.margin.bottom[index]};
        
        order: ${props.order[index]};

        top: ${props.top[index]};
        bottom: ${props.bottom[index]};
        left: ${props.left[index]};
        right: ${props.right[index]};

        align-items: ${props.alignItems[index]};
        align-content: ${props.alignContent[index]};
        align-self: ${props.alignSelf[index]};
        justify-content: ${props.justifyContent[index]};
        justify-items: ${props.justifyItems[index]};
        justify-self: ${props.justifySelf[index]};

        flex-direction: ${props.flexDirection[index]};
        flex-wrap: ${props.flexWrap[index]};
        flex-shrink: ${props.flexShrink[index]};
        flex-grow: ${props.flexGrow[index]};

        background: ${props.background[index]};
        background-color: ${props.backgroundColor[index]};
        background-image: ${props.backgroundImage[index]};
        background-position: ${props.backgroundPosition[index]};
        background-size: ${props.backgroundSize[index]};
        background-attachment: ${props.backgroundAttachment[index]};

        filter: ${props.filter[index]};
        backdrop-filter: ${props.backdropFilter[index]};
        mix-blend-mode: ${props.mixBlendMode[index]};
        background-blend-mode: ${props.backgroundBlendMode[index]};
        text-shadow: ${props.textShadow[index]};
        box-shadow: ${props.boxShadow[index]};
        -webkit-text-stroke: ${props.textStroke[index]};
        text-stroke: ${props.textStroke[index]};

        border: ${props.border[index]};
        border-left: ${props.borderLeft[index]};
        border-right: ${props.borderRight[index]};
        border-top: ${props.borderTop[index]};
        border-bottom: ${props.borderBottom[index]};

        font-family: ${props.fontFamily[index]};
        font-size: ${props.fontSize[index]};
        color: ${props.color[index]};
        line-height: ${props.lineHeight[index]};
        letter-spacing: ${props.letterSpacing[index]};
        text-decoration: ${props.textDecoration[index]};
        hyphens: ${props.hyphens[index]};

        transition: ${props.transition[index]};
        transform: ${props.transform[index]};
        animation: ${props.animation[index]};
        opacity: ${props.opacity[index]};

        ${props.styles[index] ? props.styles[index] : ""}
      `;
    })}

  ${(props) =>
    props.media.map((media, index: number) => {
      return (
        props.display[index] === "grid" &&
        media`
        grid-template-columns: repeat(${(props) => props.colspan[index]}, 1fr);

        grid-auto-rows: ${(props) => props.gridAutoRows[index]};
        grid-template-rows: ${(props) => props.gridTemplateRows[index]};
        grid-template-columns: ${(props) => props.gridTemplateColumns[index]};
        grid-auto-flow: ${(props) => props.autoFlow[index]};

        grid-column-gap: ${props.gridColumnGap[index]};
        grid-row-gap: ${props.gridRowGap[index]};

        ${
          props.isControl && props.gridColumnGap[index] === "0px"
            ? "grid-column-gap: 1px;"
            : ""
        }
      `
      );
    })}

  ${(props) =>
    props.media.map((media, index: number) => {
      return media`
        grid-column: auto / span ${props.colsTotal[index]};
        grid-column: ${(props) => props.gridColumn[index]};      `;
    })}


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
