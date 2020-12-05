import React, { useEffect, useContext, useMemo, useState } from "react";
import classNames from "classnames";

import getColsPercent from "../utils/getColsPercent";
import Inner from "../utils/inner";
import Resetter from "../utils/resetter";
import getAlignmentXRest from "../utils/getAlignmentXRest";

import Context from "../context";
import StyledBox from "./StyledBox";
import { ControlBox } from "../Control";
import { Props, defaultProps } from "./props";

import useHasChildBoxes from "./hooks/useHasChildBoxes";
import useMarginPercent from "./hooks/useMarginPercent";
import useAlign from "./hooks/useAlign";
import { useNormalizeString, useNormalizeNumber } from "./hooks/useNormalize";

const Box = React.forwardRef<HTMLElement, Props>(
  (
    {
      className,
      cols,
      alignX,
      alignY,
      children,
      left,
      right,
      top,
      bottom,
      padding,
      style,
      hasChildBoxes,
      tag,
      attrs,
      rest,
      href,
      onClick,
    },
    ref
  ) => {
    const {
      cssMode,
      breakpoints,
      gutterX,
      gutterY,
      colspan,
      parent,
      media,
      controlIsVisible,
      controlColor,
      registerChildBox,
    } = useContext(Context);

    const [childBoxes, setChildBoxes] = useState([]);
    const hasChildBoxesNormalized = useHasChildBoxes({
      hasChildBoxes,
      childBoxes,
    });
    const alignXNormalized = useAlign({
      align: alignX,
      hasChildBoxes: hasChildBoxesNormalized,
    });
    const alignYNormalized = useAlign({
      align: alignY,
      hasChildBoxes: hasChildBoxesNormalized,
    });

    const leftNormalized = useNormalizeNumber(left);
    const rightNormalized = useNormalizeNumber(right);
    const topNormalized = useNormalizeNumber(top);
    const bottomNormalized = useNormalizeNumber(bottom);
    const restNormalized = useNormalizeNumber(rest);
    const paddingNormalized = useNormalizeString(padding);
    const styleNormalized = useNormalizeString(style);
    const colsNormalized = useNormalizeNumber(cols, parent);

    const colsPercent = useMemo(
      () =>
        getColsPercent({
          cols: colsNormalized,
          left: leftNormalized,
          right: rightNormalized,
          parent,
          cssMode,
        }),
      [colsNormalized, leftNormalized, rightNormalized, parent, cssMode]
    );

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

    const alignmentXRest = useMemo(
      () =>
        getAlignmentXRest({
          childBoxes,
          breakpoints,
          cssMode,
          colsTotal: colsNormalized,
          alignX: alignXNormalized,
          alignXRaw: alignX,
        }),
      [
        alignX,
        alignXNormalized,
        breakpoints,
        childBoxes,
        colsNormalized,
        cssMode,
      ]
    );

    useEffect(() => {
      if (registerChildBox) registerChildBox();
    }, []);

    return (
      <StyledBox
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
                  parent: colsNormalized,
                  controlIsVisible,
                  controlColor,
                  cssMode,
                  rest: alignmentXRest,
                  registerChildBox: () => {
                    setChildBoxes((childBoxes) => [
                      ...childBoxes,
                      {
                        left: leftNormalized,
                        right: rightNormalized,
                        cols: colsNormalized,
                      },
                    ]);
                  },
                }}
              >
                {children}
                {/* {React.Children.toArray(children).map(
                  (child: React.ReactNode, index) => {
                    return React.isValidElement(child)
                      ? React.cloneElement(child as React.ReactElement<any>, {
                          rest: alignmentXRest && alignmentXRest[index],
                        })
                      : child;
                  }
                )} */}
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
