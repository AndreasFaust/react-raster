import React, { useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Grid, Box, useRaster } from "../src";
import { motion } from "framer-motion";
import SpecialGrid from "../components/SpecialGrid";
import SpecialBox from "../components/SpecialBox";

const ChildBox = () => {
  const { breakpoint } = useRaster();
  // console.log(breakpoint);
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
  const boxRef = React.useRef<HTMLElement>(null);
  useEffect(() => {
    console.log(boxRef.current);
  }, []);
  return (
    <>
      {/* <Box /> */}
      <SpecialGrid>
        {/* <Box /> */}
        <SpecialBox>Hallo!</SpecialBox>
        <Box
          cols={[2, 3]}
          bottom={1}
          css={`
            background: red;
          `}
          innerHTML="<h1>HALLIHALLO</h1>"
          className="test123"
        />
        <Box
          ref={boxRef}
          cols={3}
          css={`
            background: yellow;
          `}
          id="hallo"
          // onClick={(e) => console.log(e)}
          // height={["50vh", "50vh", "50vh", "100vh"]}
          onResize={(element) => {
            console.log(element.offsetWidth);
          }}
        >
          <h1>Hello!</h1>
          {/* <Box style={`basckground: red;`}>Hallo</Box> */}
        </Box>
        {/* <ChildBox /> */}
      </SpecialGrid>
    </>
  );
};

export default Testpage;
