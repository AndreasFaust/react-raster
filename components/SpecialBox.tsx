import React from "react";
import { Box, Types } from "../src";

const SpecialBox: React.FC<Types.Box> = (props) => (
  <Box {...props}>{props.children}</Box>
);

SpecialBox.defaultProps = {
  cols: [6, 6, 3],
};

export default SpecialBox;
