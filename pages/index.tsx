import React from "react";
import { NextPage } from "next";
import { Grid, Box } from "../src";
import Select from "react-select";
import GitHub from "../components/github-logo";

const gridProps = {
  colspan: 12,
  breakpoints: [0, 500, 768, 1024, 1200, 1400],
  left: "3vw",
  right: "3vw",
  gutterX: "1.5vw",
  gutterY: "3vw",
  control: true,
};

interface Props {}

const Startpage: NextPage<Props> = (props) => {
  const [mode, setMode] = React.useState<"grid" | "flex">("grid");
  function onSelect({ value }) {
    setMode(value);
  }
  return (
    <>
      <nav className="topnav">
        <GitHub />
        <Select
          instanceId="aölfksdlkgh" // fixes id-bug with NextJs
          className="modeSelect"
          placeholder="CSS Grid Layout"
          options={[
            { label: "CSS Grid Layout", value: "grid" },
            { label: "Flexbox", value: "flex" },
          ]}
          onChange={onSelect}
        />
      </nav>
      <Grid
        tag="header"
        {...gridProps}
        alignY={"center"}
        alignX={"center"}
        cssMode={mode}
        key={mode + "header"}
        css={`
          background-image: url(${process.env.productionPath +
          "/header-bg.jpg"});
          background-size: cover;
          background-position: center bottom;
          background-repeat: no-repeat;
          height: 66.666vh;
        `}
      >
        <Box
          className="logo"
          cols={[8, 6, 4, 4, 3, 2]}
          tag="img"
          src={process.env.productionPath + "/react-raster-logo.svg"}
          alt="Logo"
        />
      </Grid>
      <Grid
        tag="section"
        {...gridProps}
        alignX={"center"}
        alignY={"center"}
        cssMode={mode}
        key={mode + "section-1"}
        bottom="5vh"
        css={`
          min-height: 33.333vh;
        `}
      >
        <Box
          tag="h1"
          cols={[12, 8, 7, 6]}
          css={`
            justify-content: center;
          `}
        >
          <pre>react-raster</pre> is an advanced grid-system based on
          styled-components.
          <br />
          <span role="img" aria-label="kissing cat">
            😽
          </span>
        </Box>
        <Box className="hints" cols={[12]} top={0.5} alignX="center">
          <Box
            className="hint"
            cols={[12, 12, 5, 4]}
            left={[0, 0, 0, 1]}
            alignX={["center", "center", "right"]}
          >
            {/* <img
              className="hintIcon"
              src={process.env.productionPath + "/scale.svg"}
              alt="Scale icon"
            /> */}
            <small>Scale your Viewport to see the layout changing!</small>
          </Box>
          <Box
            className="hint"
            cols={[12, 12, 5, 4]}
            alignX={["center", "center", "left"]}
          >
            {/* <img
              className="hintIcon"
              src={process.env.productionPath + "/esc.svg"}
              alt="Escape icon"
            /> */}
            <small>
              Press <pre>ESC</pre> to see the column-grid
            </small>
          </Box>
        </Box>
        <Box cols={[12]} top={0.5} alignX="center">
          <Box cols={[12, 12, 6]} top={0.5}>
            <Box tag="h2">
              Example with <pre>Framer Motion</pre>
            </Box>
            <Box>
              <iframe
                src="https://codesandbox.io/embed/react-raster-example-with-framer-motion-ddi0k"
                style={{ width: "100%", height: 500 }}
                // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
            </Box>
          </Box>
          <Box cols={[12, 12, 6]} top={0.5}>
            <Box tag="h2">
              Example with <pre>Next JS</pre> and <pre>Framer Motion</pre>
            </Box>
            <Box>
              <iframe
                src="https://codesandbox.io/embed/react-raster-example-with-framer-motion-and-nextlink-j4wg6"
                style={{ width: "100%", height: 500 }}
                // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Grid>
      <style jsx global>{`
        @font-face {
          font-family: "Italic";
          src: url("${process.env.productionPath}/alegreya-italic.woff2")
            format("woff2");
        }
        @font-face {
          font-family: "Plex";
          src: url("${process.env.productionPath}/plex-mono.woff")
            format("woff");
        }
      `}</style>
    </>
  );
};

export default Startpage;
