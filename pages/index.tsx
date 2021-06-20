import React from "react";
import Link from "next/link";
import { Box } from "../src";
import { motion } from "framer-motion";

// const items = [
//   "Karl Marx",
//   "Friedrich Engels",
//   "Rosa Luxemburg",
//   "Karl Liebknecht",
//   "Clara Zetkin",
//   "Ernst Toller",
// ];

// const containerVariants = {
//   hidden: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   show: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const teaserVariants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// };

// export const ExampleTeaser = ({ item }) => (
//   <Link href="/test2" passHref>
//     <Box
//       cols={4}
//       css={`
//         background: blue;
//         height: 400px;
//         color: white;
//       `}
//       component={<motion.a variants={teaserVariants} />}
//     >
//       <h2>{item}</h2>
//     </Box>
//   </Link>
// );

const ExampleGrid = ({ children }) => (
  <Box
    display="grid"
    paddingLeft="5vw"
    paddingRight="5vw"
    paddingTop="5vw"
    paddingBottom="5vw"
    rowGap={"3rem"}
    columnGap={"1rem"}
    colspan={[12]}
    control
    width="100vw"
    height="100vh"
    background="red"
    // component={
    //   <motion.div
    //     variants={containerVariants}
    //     initial="hidden"
    //     animate="show"
    //     exit="hidden"
    //   />
    // }
  >
    {children}
  </Box>
);

const ExamplePage = () => {
  return (
    <ExampleGrid>
      <Box
        cols={6}
        height={3}
        marginLeft={1}
        marginTop={1}
        paddingLeft={1}
        background="yellow"
      >
        <Box cols={3} height={2} background="pink">
          Hallo!
        </Box>
      </Box>
      {/* {items.map((item) => (
        <ExampleTeaser item={item} key={item} />
      ))} */}
    </ExampleGrid>
  );
};

export default ExamplePage;
