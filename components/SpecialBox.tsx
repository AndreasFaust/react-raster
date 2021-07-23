import React from "react";
import Box, { Props } from "../src";

const SpecialBox: React.FC<Props> = (props) => (
  <Box {...props}>{props.children}</Box>
);

SpecialBox.defaultProps = {
  cols: [6, 6, 3],
  styles: "background: green;",
};

export default SpecialBox;
