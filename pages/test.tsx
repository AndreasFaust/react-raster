import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Grid, Box, useRaster } from "../src";
import { motion } from "framer-motion";

const ChildBox = () => {
  const { breakpoint } = useRaster();
  return (
    <Box
      // top={0.5}
      // left={0.5}
      cols={2}
      alignY={"center"}
      onClick={() => {
        console.log("HALLO!");
      }}
      style={`
      background: pink;
      height: 300px;

      img {
        display: block;
        width: 100%;
      }
    `}
    >
      {/* <img src={image2} alt='Sample Image' /> */}
    </Box>
  );
};

interface Props {}

const Testpage: NextPage<Props> = (props) => {
  const gridRef = React.useRef();

  return (
    <Grid
      tag="section"
      breakpoints={[0, 500, 768, 1024, 1200, 1400]}
      left={"1.5vw"}
      right={"3vw"}
      top={"10vw"}
      bottom={"20vw"}
      gutterX={["0px", "0px", "1.5vw"]}
      // gutterY={"3vw"}
      colspan={12}
      alignX={["center", "right", "left"]}
      // alignY={"center"}
      control
      // component={
      // }
      // styleOuter={`width: 80%;`}
      style={`
            background: blue;
            &.bp-768 {
              // background: black;
            }
          `}
      // cssMode="flex"
      ref={gridRef}
    >
      <Box cols={[1, 2]} bottom={1} style={`background: red;`}>
        Hallo
      </Box>
      <Box cols={[2, 3]} bottom={1} style={`background: red;`}>
        Hallo
      </Box>
      <ChildBox />
      <Link href="/" passHref>
        <Box
          style={`background: green;`}
          component={
            <motion.a
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            />
          }
        >
          <h1>DEPP!</h1>
        </Box>
      </Link>
      <Box cols={[4, 5]} bottom={1} style={`background: red;`}>
        Hallo
      </Box>
    </Grid>
  );
};

export default Testpage;
