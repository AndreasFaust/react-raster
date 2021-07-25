import React from "react";
import Link from "next/link";
import Box, { Props } from "../src";

const SpecialBox: React.FC<Props> = (props) => (
  <Link passHref href={props.href}>
    <Box {...props} as="a">
      {props.children}
    </Box>
  </Link>
);

SpecialBox.defaultProps = {
  cols: [6, 6, 3],
  styles: "background: green;",
};

export default SpecialBox;
