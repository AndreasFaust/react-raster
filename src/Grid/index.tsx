import React from "react";
import Context from "../context";
import normalizeProps from "../utils/normalizeProps";
import getMediaQueries from "../utils/getMediaQueries";
import getAlign from "../utils/getAlign";
import useControl from "../utils/useControl";
import StyledGrid from "./StyledGrid";
import { ControlGrid } from "../Control";
import useCurrentBreakpoint from "../utils/useCurrentBreakpoint";
import getAlignmentXRest from "../utils/getAlignmentXRest";
import { Props } from "./props";
import useGridClassName from "../utils/useClassName";

const Grid = React.forwardRef<HTMLElement, Props>(
  (
    {
      alignH,
      alignV,
      bottom = "0",
      display = "grid",
      breakpoints = [0, 432, 768, 1024, 1200, 1400],
      children,
      className,
      colspan = 1,
      component,
      control = false,
      controlColor = "rgba(0, 0, 0, 0.1)",
      cssMode,
      gapH = "0px",
      gapV = "0px",
      isControl = false,
      left = "0",
      position = "relative",
      right = "0",
      tag = "div",
      top = "0",
      css,
      ...undefinedProps
    },
    ref
  ) => {
    const controlIsVisible = useControl(control);
    const [childBoxes, setChildBoxes] = React.useState([]);

    const colspanNormalized = normalizeProps({ prop: colspan, breakpoints });
    const displayNormalized = normalizeProps({ prop: display, breakpoints });
    const currentBreakpoint = useCurrentBreakpoint(breakpoints);
    const currentColspan = colspanNormalized[currentBreakpoint.index - 1];

    const gapHNormalized = normalizeProps({ prop: gapH, breakpoints });
    const gapVNormalized = normalizeProps({ prop: gapV, breakpoints });
    const alignHNormalized = getAlign({
      align: normalizeProps({ prop: alignH, breakpoints }),
      hasChildBoxes: true,
      display: displayNormalized,
    });
    const alignVNormalized = getAlign({
      align: normalizeProps({ prop: alignV, breakpoints }),
      hasChildBoxes: true,
    });
    const media = getMediaQueries(breakpoints);

    const leftNormalized = normalizeProps({ prop: left, breakpoints });
    const rightNormalized = normalizeProps({ prop: right, breakpoints });
    const topNormalized = normalizeProps({ prop: top, breakpoints });
    const bottomNormalized = normalizeProps({ prop: bottom, breakpoints });
    const positionNormalized = normalizeProps({ prop: position, breakpoints });
    const cssNormalized = normalizeProps({
      prop: css,
      breakpoints,
      defaultProp: "",
    });
    const alignmentXRest = getAlignmentXRest({
      breakpoints,
      childBoxes,
      alignH: alignHNormalized,
      cols: colspanNormalized,
    });

    const classNameComplete = useGridClassName({
      className,
      currentBreakpoint,
    });
    return (
      <StyledGrid
        alignH={alignHNormalized}
        alignV={alignVNormalized}
        attrs={undefinedProps}
        bottom={bottomNormalized}
        colspan={colspanNormalized}
        component={component}
        className={classNameComplete}
        gapH={gapHNormalized}
        gapV={gapVNormalized}
        isControl={isControl}
        left={leftNormalized}
        media={media}
        position={positionNormalized}
        ref={ref}
        right={rightNormalized}
        customStyles={cssNormalized}
        tag={tag}
        top={topNormalized}
      >
        {control && controlIsVisible && (
          <ControlGrid
            colspan={colspanNormalized}
            currentColspan={currentColspan}
            breakpoints={breakpoints}
            gapH={gapHNormalized}
            gapV={gapVNormalized}
            left={leftNormalized}
            right={rightNormalized}
            top={topNormalized}
            bottom={bottomNormalized}
            controlColor={controlColor}
          />
        )}

        <Context.Provider
          value={{
            cssMode: cssModeNormalized,
            breakpoint: currentBreakpoint,
            breakpoints,
            gapH: gapHNormalized,
            gapV: gapVNormalized,
            media,
            colspan: currentColspan,
            parentCols: colspanNormalized,
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
      </StyledGrid>
    );
  }
);

export default Grid;
export { Grid };
