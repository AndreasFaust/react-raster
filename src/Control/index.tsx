import React from "react";
import styled from "styled-components";

import Box from "../Box";

// interface ControlGridProps {
//   colspan: number[];
//   currentColspan: number;
//   breakpoints: number[];
//   rowGap: string | string[];
//   columnGap: string | string[];
//   left: string | string[];
//   right: string | string[];
//   top: string | string[];
//   bottom: string | string[];
//   controlColor: string;
// }

const ControlGrid: React.FC<any> = (props) => {
  const { breakpoint, colspan, ...rest } = props;
  return (
    <Box
      position="absolute"
      className="GridControl"
      colspan={colspan}
      columnGap={props.columnGap}
      autoRows="100%"
      left={props.padding.left}
      right={props.padding.right}
      top={props.padding.top}
      bottom={props.padding.bottom}
      //   isControl
    >
      {[...Array(colspan[breakpoint.index])].map((_, index) => (
        <Box
          key={index}
          display="flex"
          alignSelf="stretch"
          cols={1}
          backgroundColor={props.controlColor || "rgba(0,0,0,0.12)"}
        />
      ))}
    </Box>
  );
};

const ControlBox = styled("div")<{ controlColor: string }>`
  position: absolute;
  z-index: 10000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.controlColor || "rgba(0,0,0,0.12)"};
  pointer-events: none;
`;

const Control: React.FC<any> = (props) => {
  return props.isNewGrid ? (
    <ControlGrid {...props} />
  ) : (
    <ControlBox controlColor={props.controlColor} />
  );
};

export default Control;
