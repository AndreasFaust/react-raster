import React, { useEffect, useContext, useState } from "react";
import { nanoid } from "nanoid/non-secure";

import getColsPercent from "../utils/getColsPercent";
import Inner from "../utils/inner";
import Resetter from "../utils/resetter";
import getAlign from "../utils/getAlign";
import getAlignmentXRest from "../utils/getAlignmentXRest";
import normalizeCols from "../utils/normalizeCols";
import normalizeRest from "../utils/normalizeRest";
import normalizeProps from "../utils/normalizeProps";
import getReset from "../utils/getReset";
import ErrorMessage from "../utils/ErrorMessage";
import useCombinedRefs from "../utils/useCombinedRefs";
import useResizeObserver from "../utils/useResizeObserver";

import Context from "../context";
import StyledBox from "./StyledBox";
import { ControlBox } from "../Control";
import { Props } from "./props";

import useMarginPercent from "./hooks/useMarginPercent";

const Box = React.forwardRef<HTMLElement, Props>(
  (
    {
      alignX,
      alignY,
      bottom = 0,
      children,
      className,
      cols,
      component,
      hasChildBoxes,
      height,
      innerHTML,
      left = 0,
      onResize,
      order,
      padding,
      right = 0,
      css,
      tag = "div",
      top = 0,
      ...undefinedProps
    },
    ref
  ) => {
    const context = useContext(Context);
    if (!context.breakpoints) {
      return <ErrorMessage />;
    }
    const {
      breakpoint,
      breakpoints,
      colspan,
      controlColor,
      controlIsVisible,
      cssMode,
      gutterX,
      gutterY,
      media,
      parentCols,
      rest,
      registerChildBox,
    } = context;

    const id = React.useRef(nanoid());
    const [childBoxes, setChildBoxes] = useState([]);
    const hasChildBoxesNormalized = getReset({
      hasChildBoxesFromProps: hasChildBoxes,
      hasChildBoxesFromRegister: !!childBoxes.length,
    });
    const alignXNormalized = getAlign({
      align: normalizeProps({ prop: alignX, breakpoints }),
      cssMode,
      hasChildBoxes: hasChildBoxesNormalized,
    });
    const alignYNormalized = getAlign({
      align: normalizeProps({ prop: alignY, breakpoints }),
      cssMode,
      hasChildBoxes: hasChildBoxesNormalized,
    });

    const restNormalized = normalizeRest({ rest, breakpoints, id: id.current });

    const leftNormalized = normalizeProps({ prop: left, breakpoints });
    const rightNormalized = normalizeProps({ prop: right, breakpoints });
    const topNormalized = normalizeProps({ prop: top, breakpoints });
    const bottomNormalized = normalizeProps({ prop: bottom, breakpoints });
    const paddingNormalized = normalizeProps({ prop: padding, breakpoints });
    const cssNormalized = normalizeProps({ prop: css, breakpoints });
    const orderNormalized = normalizeProps({ prop: order, breakpoints });
    const heightNormalized = normalizeProps({ prop: height, breakpoints });

    const colsNormalized = normalizeCols({
      cols,
      parentCols,
      breakpoints,
      left: leftNormalized,
      right: rightNormalized,
    });

    const colsPercent = getColsPercent({
      cols: colsNormalized,
      left: leftNormalized,
      right: rightNormalized,
      parentCols,
      cssMode,
    });

    const restPercent = useMarginPercent({
      prop: restNormalized,
      cols: colsPercent,
    });
    const leftPercent = useMarginPercent({
      prop: leftNormalized,
      cols: colsPercent,
    });
    const rightPercent = useMarginPercent({
      prop: rightNormalized,
      cols: colsPercent,
    });
    const topPercent = useMarginPercent({
      prop: topNormalized,
      cols: colsPercent,
    });
    const bottomPercent = useMarginPercent({
      prop: bottomNormalized,
      cols: colsPercent,
    });

    const alignmentXRest = getAlignmentXRest({
      breakpoints,
      childBoxes,
      cssMode,
      alignX: alignXNormalized,
      cols: colsNormalized,
    });

    useEffect(() => {
      if (registerChildBox)
        registerChildBox({
          left: leftNormalized,
          right: rightNormalized,
          cols: colsNormalized,
          id: id.current,
        });
    }, []);
    const boxRef = useCombinedRefs(ref);
    useResizeObserver(boxRef, onResize);

    return (
      <StyledBox
        component={component}
        cssMode={cssMode}
        breakpoints={breakpoints}
        className={
          cssMode === "grid" && className ? ["Box", className].join(" ") : "Box"
        }
        height={heightNormalized}
        cols={colsPercent}
        rest={restPercent}
        media={media}
        gutterX={gutterX}
        gutterY={gutterY}
        colspan={colsNormalized}
        hasChildBoxes={hasChildBoxesNormalized}
        alignX={alignXNormalized}
        alignY={alignYNormalized}
        tag={tag}
        left={leftPercent}
        right={rightPercent}
        top={topPercent}
        bottom={bottomPercent}
        padding={paddingNormalized}
        controlIsVisible={controlIsVisible}
        controlColor={controlColor}
        order={orderNormalized}
        customStyles={cssNormalized}
        ref={boxRef}
        attrs={{
          ...undefinedProps,
          ...(innerHTML &&
            cssMode === "grid" && {
              dangerouslySetInnerHTML: { __html: innerHTML },
            }),
        }}
      >
        <Inner
          cssMode={cssMode}
          media={media}
          alignX={alignXNormalized}
          alignY={alignYNormalized}
          customStyles={cssNormalized}
          hasChildBoxes={hasChildBoxes}
          innerHTML={innerHTML}
          className={
            className ? ["Box__Inner", className].join(" ") : "Box__Inner"
          }
        >
          <>
            {controlIsVisible && <ControlBox controlColor={controlColor} />}
            <Resetter
              cssMode={cssMode}
              className="Box__Resetter"
              hasChildBoxes={hasChildBoxesNormalized}
              media={media}
              gutterX={gutterX}
              gutterY={gutterY}
              alignX={alignXNormalized}
              alignY={alignYNormalized}
              padding={paddingNormalized}
            >
              <Context.Provider
                value={{
                  breakpoints,
                  breakpoint,
                  gutterX,
                  gutterY,
                  colspan,
                  media,
                  parentCols: colsNormalized,
                  controlIsVisible,
                  controlColor,
                  cssMode,
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
          </>
        </Inner>
      </StyledBox>
    );
  }
);

Box.displayName = "Box";

export default Box;
export { Box };
