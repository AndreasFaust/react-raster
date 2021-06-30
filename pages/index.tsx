import React from "react";
import Link from "next/link";
import Box from "../src";
import { motion } from "framer-motion";

const ExamplePage = () => {
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
      {/* <Box>
          <Box height="500px" background="yellow">
          </Box>
        </Box> */}
    </Box>
  );
};

export default ExamplePage;
