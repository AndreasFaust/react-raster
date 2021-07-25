import React from "react";
import Link from "next/link";
import Box from "../src";
import { motion, AnimatePresence } from "framer-motion";

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

const boxPadding = ["2rem 1", "2rem 1", "1"];

const ExamplePage = () => {
  const [opacity, setOpacity] = React.useState(0);
  function onIntersect(entry, observer) {
    // console.log("INTERSECT");
    // console.log(entry.intersectionRatio);
    // console.log(entry);
    // console.log(observer);
    if (entry.isIntersecting) {
      // observer.unobserve(entry.target);
    }
    setOpacity(entry.intersectionRatio);
  }

  return (
    <Box
      as="section"
      colspan={12}
      gap="1rem 1rem"
      control
      padding={boxPadding}
      background="pink"
      // minHeight={"100px"}
      // onClick={() => setOpacity((prev) => !prev)}
    >
      <Box
        height={["200px", "200px", "400px"]}
        marginTop="100vw"
        background="green"
        // onIntersect={React.useCallback(() => onIntersect, [])}
        onIntersect={onIntersect}
      >
        Hallo
      </Box>
      {/* <Box
        cols="5"
        marginRight="2"
        padding={[1]}
        height="500px"
        // opacity={opacity ? 1 : 0}
        background="yellow"
        fontStyle="italic"
        fontWeight="bold"
        textAlign="center"
        fontFamily="Avenir"
        fontSize="3rem"
        // marginBottom="100vh"
      >
        <Box background="pink">
          <Box background="blue" as="p" marginLeft={1}>
            Hallo!
          </Box>
        </Box>
      </Box>
      <Box
        cols="3"
        padding={"2rem 2rem 2rem 0"}
        height="250px"
        // opacity={opacity ? 1 : 0}
        background="yellow"
        fontStyle="italic"
        fontWeight="bold"
        textAlign="center"
        fontFamily="Avenir"
        fontSize="3rem"
        // marginBottom="100vh"
      >
        <Box background="blue" as="p" marginLeft={1}>
          Hallo!
        </Box>
      </Box> */}
    </Box>
  );
};

export default ExamplePage;
