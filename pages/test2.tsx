import React from "react";
import Link from "next/link";
import { Grid, Box } from "../src";
import { motion } from "framer-motion";

const items = [
  "Karl Marx",
  "Friedrich Engels",
  "Rosa Luxemburg",
  "Karl Liebknecht",
  "Clara Zetkin",
  "Ernst Toller",
];

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const teaserVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const ExampleTeaser = ({ item }) => {
  return (
    <Link href="/test3" passHref>
      <Box
        cols={4}
        style={`
        background: blue;
        height: 400px;
        color: white;
      `}
        alignY="center"
        alignX="center"
        component={<motion.a variants={teaserVariants} />}
      >
        <Box
          tag="h2"
          onResize={(element) => {
            console.log(element.offsetWidth);
          }}
        >
          {item}
        </Box>
      </Box>
    </Link>
  );
};

const ExampleGrid = ({ children }) => (
  <Grid
    left={"1.5vw"}
    right={"1.5vw"}
    top={"3vw"}
    bottom={"20vw"}
    gutterX={"1.5vw"}
    gutterY={"1.25vw"}
    colspan={12}
    control
    component={
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
      />
    }
  >
    {children}
  </Grid>
);

const ExamplePage = () => {
  return (
    <ExampleGrid>
      {items.map((item) => (
        <ExampleTeaser item={item} key={item} />
      ))}
    </ExampleGrid>
  );
};

export default ExamplePage;
