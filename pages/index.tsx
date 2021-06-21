import React from "react";
import Link from "next/link";
import Box from "../src";
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
    paddingTop="5vw"
    paddingBottom="5vw"
    // rowGap={"1rem"}
    // columnGap={"1rem"}
    colspan={[12]}
    control
    width="100vw"
    paddingLeft={"4rem"}
    paddingRight={1}
    // marginLeft={1}
    // height="100vh"
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
    <>
      {/* <ExampleGrid>
        <Box
          cols={6}
          marginLeft={1}
          paddingLeft={1}
          // marginTop={1}
          background="yellow"
        >
          <Box background="pink" marginRight={1} paddingLeft={1}>
            Hallo!
          </Box>
        </Box> */}
      {/* {items.map((item) => (
        <ExampleTeaser item={item} key={item} />
      ))} */}
      {/* </ExampleGrid> */}

      <Box colspan={12}>
        <Box>
          <Box paddingLeft={1} paddingRight={1} background="yellow">
            <Box background="pink">Hallo!</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ExamplePage;
