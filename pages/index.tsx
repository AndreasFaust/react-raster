import React from "react";
import Link from "next/link";
import Box from "../src";
import { motion, AnimatePresence } from "framer-motion";

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

const ExamplePage = () => {
  const [opacity, setOpacity] = React.useState(false);
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
      // onClick={() => setOpacity((prev) => !prev)}
    >
      <Box
        cols={[2, 5, 8, 9]}
        height="500px"
        // opacity={opacity ? 1 : 0}
        background="yellow"
      ></Box>

      {/* <AnimatePresence>
        {opacity && (
          <Box
            background="yellow"
            height="25vh"
            component={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            }
          >
            Hallo ich bin ein langer Text!!!
          </Box>
        )}
      </AnimatePresence>
      <Box
        background="yellow"
        marginTop="100vh"
        height="50vh"
        opacity={opacity ? 1 : 0}
        onIntersect={onIntersect}
        // threshold={buildThresholdArray()}
      >
        Intersection!!!
      </Box> */}
    </Box>
  );
};

export default ExamplePage;
