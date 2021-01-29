import React from "react";
import styled from "styled-components";

import Grid from "../Grid";
import Box from "../Box";

interface ControlGridProps {
  cssMode: "grid" | "flex";
  colspan: number[];
  currentColspan: number;
  breakpoints: number[];
  gutterX: string | string[];
  gutterY: string | string[];
  left: string | string[];
  right: string | string[];
  top: string | string[];
  bottom: string | string[];
  controlColor: string;
}

const ControlGrid: React.FC<ControlGridProps> = (props) => {
  const { currentColspan, ...rest } = props;
  return (
    <Grid
      {...rest}
      position="absolute"
      className="GridControl"
      alignY="stretch"
      isControl
    >
      {[...Array(currentColspan)].map((col, index) => (
        <Box
          key={index}
          cols={1}
          css={`
            background-color: ${props.controlColor};
          `}
        />
      ))}
    </Grid>
  );
};

interface ControlBoxProps {
  controlColor: string;
}

const StyledControlBox = styled("div")<ControlBoxProps>`
  position: absolute;
  z-index: 10000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.controlColor};
  pointer-events: none;
`;

const ControlBox: React.FC<ControlBoxProps> = (props) => {
  return <StyledControlBox {...props} />;
};

export { ControlGrid, ControlBox };
