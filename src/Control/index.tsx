import React from "react";
import styled from "styled-components";

import Box from "../Box";

function getSideBearing(side: string, props: any): any {
  const sideUppercase = side.replace(/^\w/, (c) => c.toUpperCase());
  return props[`padding${sideUppercase}InCols`].map((padding, index) => {
    if (typeof padding === "number") {
      return 0;
    }
    return props.padding[side][index] || 0;
  });
}
function getTopBottomBearing(side: string, props: any): any {
  return props.padding[side].map((padding, index) => {
    return padding || 0;
  });
}

const ControlGrid: React.FC<any> = (props) => {
  const { breakpoint, colspanTotal } = props;
  return (
    <Box
      position="absolute"
      className="GridControl"
      zIndex={1000}
      colspan={colspanTotal}
      gridColumnGap={props.gridColumnGap}
      gridAutoRows="100%"
      top={0}
      bottom={0}
      left={0}
      right={0}
      marginLeft={getSideBearing("left", props)}
      marginRight={getSideBearing("right", props)}
      marginTop={getTopBottomBearing("top", props)}
      marginBottom={getTopBottomBearing("bottom", props)}
      isControl
    >
      {[...Array(colspanTotal[breakpoint.index])].map((_, index) => (
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
