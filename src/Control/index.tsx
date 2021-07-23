import React from "react";
import styled from "styled-components";

import Box from "../Box";

function getSideBearing(padding: string | number): string | number {
  return typeof padding === "number" ? 0 : padding;
}

const ControlGrid: React.FC<any> = (props) => {
  const { colspanTotal } = props;
  return (
    <Box
      position="absolute"
      className="GridControl"
      zIndex={1000}
      colspan={colspanTotal}
      gridColumnGap={props.gap.column}
      gridAutoRows="100%"
      top={0}
      bottom={0}
      left={0}
      right={0}
      marginLeft={getSideBearing(props.paddingRaw.left)}
      marginRight={getSideBearing(props.paddingRaw.right)}
      marginTop={getSideBearing(props.paddingRaw.top)}
      marginBottom={getSideBearing(props.paddingRaw.bottom)}
      pointerEvents="none"
      isControl
    >
      {[...Array(colspanTotal)].map((_, index) => (
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

const ControlBox = styled("span")<{ controlColor: string }>`
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
