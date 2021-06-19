import React, { useEffect } from "react";
import { NextPage } from "next";
import { Box, useRaster } from "../src";
import SpecialBox from "../components/SpecialBox";

interface Props {}

const Testpage: NextPage<Props> = (props) => {
  const boxRef = React.useRef(null);
  useEffect(() => {
    console.log(boxRef.current);
  }, []);
  return (
    <Box colspan={12} columnGap="5vw" rowGap="5vw">
      <Box
        cols={6}
        css={`
          background: red;
        `}
        ref={boxRef}
      >
        Too wide
      </Box>
      <SpecialBox>Hallo!</SpecialBox>
      <Box
        cols={[2, 3]}
        bottom={1}
        css={`
          background: red;
        `}
        innerHTML="<h1>HALLIHALLO</h1>"
        className="test123"
      />
      <Box
        ref={boxRef}
        cols={12}
        css={`
          background: yellow;
        `}
        id="hallo"
        // onClick={(e) => console.log(e)}
        // height={["50vh", "50vh", "50vh", "100vh"]}
        onResize={(element) => {
          console.log(element.offsetWidth);
        }}
      >
        <h1>
          Hello, Nach einem Jahr Pandemie sind die Infektionszahlen in
          Deutschland hoch. Neue Mutationen machen das Virus noch
          unberechenbarer. Trotz tiefgreifender Maßnahmen sind viele Regierungen
          unfähig oder nicht willens, einen konsequenten Gesundheitsschutz auch
          in der Arbeitswelt durchzusetzen oder die nicht lebenswichtige
          Produktion einzuschränken. Allein die private Solidarität der
          Bürger*innen soll uns aus der Krise führen.!
        </h1>
        {/* <Box style={`basckground: red;`}>Hallo</Box> */}
      </Box>
      {/* <ChildBox /> */}
      <Box
        css={`
          height: 100%;
          background: yellow;
        `}
      ></Box>
      <Box
        cols={1}
        css={`
          height: 100%;
          background: red;
        `}
      ></Box>
    </Box>
  );
};

export default Testpage;
