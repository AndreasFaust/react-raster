import React from "react";
import { Grid, Types } from "../src";

const SpecialGrid: React.FC<Types.Grid> = (props) => (
  <Grid tag="section" {...props}>
    {props.children}
  </Grid>
);

SpecialGrid.defaultProps = {
  tag: "section",
  breakpoints: [0, 500, 768, 1024, 1200, 1400],
  left: "1.5vw",
  right: "3vw",
  top: "10vw",
  bottom: "20vw",
  gutterX: ["0px", "0px", "1.5vw"],
  gutterY: "1.5vw",
  colspan: [6, 6, 6, 12],
  alignX: ["center", "right", "left"],
  // alignY:"center",
  control: true,
  className: "test123",
  // component:,
  //
  // styleOuter:`width: 80%;`,
  css: `
    background: blue;
    grid-auto-rows: minmax(min-content, 1fr);
    &.bp-768 {
      // background: black;
    }
  `,
};

export default SpecialGrid;
