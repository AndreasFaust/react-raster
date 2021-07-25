import React from "react";
import Box from "../src";

const ExamplePage = () => {
  return (
    <Box
      breakpoints={[0, 400, 800, 1200]}
      colspan={"12"}
      padding={"1rem"}
      gap="0.5rem 1rem"
      control
    >
      {/* <Box as="h3" marginBottom="1.5rem">
        Press ESC to see the Grid
      </Box>

      <Box
        as="h1"
        margin="0px"
        cols={[12, 12, 6]}
        padding={1}
        height={["250px", "250px", "500px"]}
        background="lightblue"
        display="flex"
        alignItems="stretch"
        justifyContent="stretch"
      >
        <Box
          background="#111" 
          margin="0px"
          color="coral"
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          Hello World!
        </Box>
      </Box> */}
      <Box as="h1" cols="12 | 12 | 6" height="500px" background="orange">
        Hallo!
        {/* <Box
          as="p"
          margin="1"
          display="flex"
          color="white"
          alignItems="center"
          justifyContent="center"
          background="darkblue"
          fontSize="1.5rem"
          fontWeight="bold"
        >
          Stop
        </Box> */}
        {/* <Box
          as="p"
          margin="0px"
          display="flex"
          color="white"
          alignItems="center"
          justifyContent="center"
          background="coral"
          fontSize="1.5rem"
          fontWeight="bold"
        >
          Wars
        </Box> */}
      </Box>
    </Box>
  );
};

export default ExamplePage;
