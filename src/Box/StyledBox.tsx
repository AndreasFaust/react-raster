import styled from "styled-components";

import Container from "./utils/container";

interface Props {}

// ${
//   props.isControl && props.rowGap[index] === "0px"
//     ? "grid-column-gap: 1px;"
//     : ""
// }

const StyledBox = styled(Container)<any>`
  box-sizing: border-box;

  ${(props) =>
    props.media.map((media, index) => {
      return media`
        position: relative;
        display: ${props.display[index]};
        grid-column: auto / span ${props.colsTotal[index]};
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
    props.media.map((media, index) => {
      return media`
        grid-template-columns: repeat(${(props) => props.cols[index]}, 1fr);
        grid-auto-columns: ${(props) => props.cols[index]}fr;
        grid-auto-rows: min-content;
        grid-column-gap: ${props.columnGap[index]};
        grid-row-gap: ${props.rowGap[index]};
      `;
    })}


  ${(props) =>
    props.tag === "img" &&
    props.controlIsVisible &&
    `
    box-shadow: 0 0 999em ${props.controlColor} inset;
  `}
`;

export default StyledBox;
