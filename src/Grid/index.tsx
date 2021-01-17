import React from "react";
import Context from "../context";
import normalizeProps from "../utils/normalizeProps";
import getMediaQueries from "../utils/getMediaQueries";
import getAlign from "../utils/getAlign";
import useControl from "../utils/useControl";
import Inner from "../utils/inner";
import Resetter from "../utils/resetter";
import useCssMode from "../utils/useCssMode";
import StyledGrid from "./StyledGrid";
import { ControlGrid } from "../Control";
import useCurrentBreakpoint from "../utils/useCurrentBreakpoint";
import getAlignmentXRest from "../utils/getAlignmentXRest";
import { Props } from "./props";
import useGridClassName from "../utils/useClassName";

const Grid = React.forwardRef<HTMLElement, Props>(
  (
    {
      alignX = null,
      alignY = null,
      attrs = {},
      bottom = "0",
      breakpoints = [0, 432, 768, 1024, 1200, 1400],
      children = null,
      className = null,
      colspan = 1,
      component = null,
      control = false,
      controlColor = "rgba(0, 0, 0, 0.1)",
      cssMode = null,
      gutterX = "0px",
      gutterY = "0px",
      isControl = false,
      left = "0",
      position = "relative",
      right = "0",
      tag = "div",
      top = "0",
      style = null,
    },
    ref
  ) => {
    const controlIsVisible = useControl(control);
    const cssModeNormalized = useCssMode(cssMode);
    const [childBoxes, setChildBoxes] = React.useState([]);

    const currentBreakpoint = useCurrentBreakpoint(breakpoints);
    const gutterXNormalized = normalizeProps({ prop: gutterX, breakpoints });
    const gutterYNormalized = normalizeProps({ prop: gutterY, breakpoints });
    const alignXNormalized = getAlign({
      align: normalizeProps({ prop: alignX, breakpoints }),
      cssMode: cssModeNormalized,
      hasChildBoxes: true,
    });
    const alignYNormalized = getAlign({
      align: normalizeProps({ prop: alignY, breakpoints }),
      cssMode: cssModeNormalized,
      hasChildBoxes: true,
    });

    const media = getMediaQueries(breakpoints);
    const colsNormalized = normalizeProps({
      prop: colspan,
      breakpoints,
    });
    const leftNormalized = normalizeProps({ prop: left, breakpoints });
    const rightNormalized = normalizeProps({ prop: right, breakpoints });
    const topNormalized = normalizeProps({ prop: top, breakpoints });
    const bottomNormalized = normalizeProps({ prop: bottom, breakpoints });
    const positionNormalized = normalizeProps({ prop: position, breakpoints });
    const styleNormalized = normalizeProps({ prop: style, breakpoints });
    const alignmentXRest = getAlignmentXRest({
      breakpoints,
      childBoxes,
      cssMode,
      alignX: alignXNormalized,
      cols: colsNormalized,
    });

    const classNameComplete = useGridClassName(className, currentBreakpoint);

    return (
      <StyledGrid
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        attrs={attrs}
        bottom={bottomNormalized}
        cssMode={cssModeNormalized}
        colspan={colspan}
        component={component}
        className={classNameComplete}
        gutterX={gutterXNormalized}
        gutterY={gutterYNormalized}
        isControl={isControl}
        left={leftNormalized}
        media={media}
        position={positionNormalized}
        ref={ref}
        right={rightNormalized}
        style={styleNormalized}
        tag={tag}
        top={topNormalized}
      >
        {control && controlIsVisible && (
          <ControlGrid
            cssMode={cssModeNormalized}
            colspan={colspan}
            breakpoints={breakpoints}
            gutterX={gutterXNormalized}
            gutterY={gutterYNormalized}
            left={leftNormalized}
            right={rightNormalized}
            top={topNormalized}
            bottom={bottomNormalized}
            controlColor={controlColor}
            media={media}
          />
        )}
        <Inner
          cssMode={cssModeNormalized}
          className="Grid__Inner"
          alignX={alignXNormalized}
          alignY={alignYNormalized}
          style={styleNormalized}
          media={media}
          hasChildBoxes
        >
          <Resetter
            cssMode={cssModeNormalized}
            className="Grid__Resetter"
            hasChildBoxes
            gutterX={gutterXNormalized}
            gutterY={gutterYNormalized}
            alignX={alignXNormalized}
            alignY={alignYNormalized}
            media={media}
          >
            <Context.Provider
              value={{
                cssMode: cssModeNormalized,
                breakpoint: currentBreakpoint,
                breakpoints,
                gutterX: gutterXNormalized,
                gutterY: gutterYNormalized,
                media,
                colspan,
                parentCols: colsNormalized,
                controlIsVisible,
                controlColor,
                rest: alignmentXRest,
                registerChildBox: (childBox: {
                  left: number[];
                  right: number[];
                  cols: number[];
                  id: string;
                }) => {
                  setChildBoxes((childBoxes) => [...childBoxes, childBox]);
                },
              }}
            >
              {children}
            </Context.Provider>
          </Resetter>
        </Inner>
      </StyledGrid>
    );
  }
);

export default Grid;
export { Grid };
