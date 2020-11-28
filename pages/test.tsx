import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Grid, Box } from "../raster";

const ImageBox = () => (
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

interface Props {}

const Testpage: NextPage<Props> = (props) => {
  const boxRef = React.useRef();
  const gridRef = React.useRef();

  React.useEffect(() => {
    // console.log(boxRef.current);
    // console.log(gridRef.current);
  }, []);

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
      alignX={"center"}
      alignY={"center"}
      control
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
      <Link href="/" passHref>
        <Box
          ref={boxRef}
          className="Box--2"
          tag="a"
          cols={[5]}
          left={[0]}
          style={`
          background: pink;
          height: 200px;
        `}
        >
          <h1>Hallo!</h1>
        </Box>
      </Link>
      <Box
        ref={boxRef}
        className="Box--1"
        cols={[4]}
        left={[2]}
        right={[1]}
        alignY="center"
        onClick={() => {
          console.log("HALLO!");
        }}
        style={`
          background: yellow;
          height: 400px;
          border: 2px solid red;
          
          .bp-768 && {
            background: black;
          }
        `}
      >
        <ImageBox />
        <Box
          className="Box--3"
          cols={[1]}
          left={[1]}
          alignY="center"
          style={`
            background: green;
            height: 150px;
          `}
        />
      </Box>
    </Grid>
  );
};

export default Testpage;
