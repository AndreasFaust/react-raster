import React from "react";
import Link from "next/link";
import Box from "../src";
import { motion } from "framer-motion";

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

const ExamplePage = () => {
  const [opacity, setOpacity] = React.useState(1);
  function onIntersect(entry, observer) {
    console.log("INTERSECT");
    // console.log(entry);
    // console.log(observer);
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
    // setOpacity(entry.intersectionRatio);
  }
  return (
    <Box
      as="section"
      colspan={12}
      control
      padding={[1, "2rem 3 4em", null, "3"]}
      background="pink"
      styles="color: red;"
      minHeight={"100px"}
    >
      <Box background="yellow">Hallo ich bin ein langer Text!!!</Box>
      <Box
        background="yellow"
        marginTop="100vh"
        height="50vh"
        opacity={opacity}
        onIntersect={onIntersect}
        // threshold={buildThresholdArray()}
      >
        Intersection!!!
      </Box>
      {/* <Box>
          <Box height="500px" background="yellow">
          </Box>
        </Box> */}
    </Box>
  );
};

export default ExamplePage;
