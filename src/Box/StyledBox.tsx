import styled from "styled-components";
import React from "react";
import Container from "./utils/container";

interface Props {
  position: string[];
  zIndex: (string | number)[];
  display: string[];
  colsTotal: number[];
  width: string[];
  height: string[];

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

  top: string[];
  bottom: string[];
  left: string[];
  right: string[];

  alignItems: string[];
  alignContent: string[];
  alignSelf: string[];
  justifyContent: string[];
  justifySelf: string[];

  background: string[];
  backgroundColor: string[];
  backgroundImage: string[];
  backgroundPosition: string[];
  backgroundSize: string[];
  backgroundAttachment: string[];

  border: string[];
  borderLeft: string[];
  borderRight: string[];
  borderTop: string[];
  borderBottom: string[];

  colspan: number[];

  autoRows: string[];
  templateRows: string[];
  templateColumns: string[];
  autoFlow: string[];

  columnGap: string[];
  rowGap: string[];

  media: any;
  tag?: string;
  controlIsVisible: boolean;
  controlColor: string;

  id: string;
  component?: React.ReactElement;
  className: string;
  css: string[];
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
        height: ${props.height[index]};

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
        justify-Self: ${props.justifySelf[index]};

        background: ${props.background[index]};
        background-color: ${props.backgroundColor[index]};
        background-image: ${props.backgroundImage[index]};
        background-position: ${props.backgroundPosition[index]};
        background-Size: ${props.backgroundSize[index]};
        background-attachment: ${props.backgroundAttachment[index]};

        border: ${props.border[index]};
        border-left: ${props.borderLeft[index]};
        border-right: ${props.borderRight[index]};
        border-top: ${props.borderTop[index]};
        border-bottom: ${props.borderBottom[index]};

        ${props.css[index]}
      `;
    })}

  ${(props) =>
    props.media.map((media, index: number) => {
      return media`
        grid-template-columns: repeat(${(props) => props.colspan[index]}, 1fr);
        grid-column: auto / span ${props.colsTotal[index]};

        grid-auto-rows: ${(props) => props.autoRows[index]};
        grid-template-rows: ${(props) => props.templateRows[index]};
        grid-template-columns: ${(props) => props.templateColumns[index]};
        grid-auto-flow: ${(props) => props.autoFlow[index]};

        grid-column-gap: ${props.columnGap[index]};
        grid-row-gap: ${props.rowGap[index]};

        ${
          props.isControl && props.columnGap[index] === "0px"
            ? "grid-column-gap: 1px;"
            : ""
        }
      `;
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
