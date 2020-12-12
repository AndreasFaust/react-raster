import React, { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid/non-secure";

import getColsPercent from "../utils/getColsPercent";
import Inner from "../utils/inner";
import Resetter from "../utils/resetter";
import getAlign from "../utils/getAlign";
import getAlignmentXRest from "../utils/getAlignmentXRest";
import normalizeRest from "../utils/normalizeRest";
import normalizeProps from "../utils/normalizeProps";
import getReset from "../utils/getReset";
import ErrorMessage from "../utils/ErrorMessage";

import Context from "../context";
import StyledBox from "./StyledBox";
import { ControlBox } from "../Control";
import { Props, defaultProps } from "./props";

import useMarginPercent from "./hooks/useMarginPercent";

const Box = React.forwardRef<HTMLElement, Props>(
  (
    {
      alignX,
      alignY,
      attrs,
      bottom,
      className,
      cols,
      component,
      children,
      hasChildBoxes,
      href,
      padding,
      left,
      onClick,
      right,
      style,
      top,
      tag,
    },
    ref
  ) => {
    const context = useContext(Context);
    if (!context) {
      return <ErrorMessage />;
    }

    const {
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

    const [id] = React.useState(nanoid);
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

    const restNormalized = normalizeRest({ rest, breakpoints, id });

    const leftNormalized = normalizeProps({ prop: left, breakpoints });
    const rightNormalized = normalizeProps({ prop: right, breakpoints });
    const topNormalized = normalizeProps({ prop: top, breakpoints });
    const bottomNormalized = normalizeProps({ prop: bottom, breakpoints });
    const paddingNormalized = normalizeProps({ prop: padding, breakpoints });
    const styleNormalized = normalizeProps({ prop: style, breakpoints });
    const colsNormalized = normalizeProps({
      prop: cols,
      defaultProp: parentCols,
      breakpoints,
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
          id,
        });
    }, []);

    return (
      <StyledBox
        component={component}
        cssMode={cssMode}
        breakpoints={breakpoints}
        className={cssMode === "grid" ? classNames(["Box", className]) : "Box"}
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
        style={cssMode === "grid" && styleNormalized}
        ref={ref}
        attrs={{
          ...attrs,
          ...(href && { href }),
          ...(onClick && { onClick }),
        }}
      >
        <Inner
          cssMode={cssMode}
          media={media}
          alignX={alignXNormalized}
          alignY={alignYNormalized}
          style={styleNormalized}
          hasChildBoxes={hasChildBoxes}
          className={classNames(["Box__Inner", className])}
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
Box.defaultProps = defaultProps;

export default Box;
export { Box };
