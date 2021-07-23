import React from "react";
import Link from "next/link";
import Box from "../src";
import { motion, AnimatePresence } from "framer-motion";

const ExamplePage = () => {
  const [opacity, setOpacity] = React.useState(0);
  function onClick() {
    setOpacity((current) => (!current ? 1 : 0));
  }
  return (
    <>
      <Box
        as="button"
        position="fixed"
        left="1rem"
        top="1rem"
        onClick={onClick}
      >
        Click Me!
      </Box>
      <AnimatePresence>
        {opacity && (
          <Box
            background="yellow"
            height="25vh"
            marginTop="10vh"
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
    </>
  );
};

export default ExamplePage;
