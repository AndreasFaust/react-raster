import React, { useEffect, useContext, useMemo, useState } from "react";
import classNames from "classnames";

import getReset from "../utils/getReset";
import normalizeProps from "../utils/normalizeProps";
import getAlign from "../utils/getAlign";
import getColsPercent from "../utils/getColsPercent";
import getMarginsPercent from "../utils/getMarginsPercent";
import Inner from "../utils/inner";
import Resetter from "../utils/resetter";
import getAlignmentXRest from "../utils/getAlignmentXRest";

import Context from "../context";
import StyledBox from "./StyledBox";
import { ControlBox } from "../Control";
import Props from "./props";

const Box = React.forwardRef<HTMLElement, Props>(
  (
    {
      className = "",
      cols = undefined,
      alignX = "",
      alignY = "",
      children = null,
      left = 0,
      right = 0,
      top = 0,
      bottom = 0,
      padding = null,
      style = "",
      hasChildBoxes = undefined,
      tag = "div",
      attrs = {},
      rest = [0],
      href = "",
      onClick = null,
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
      register,
    } = useContext(Context);

    const [hasChildBoxesRegistered, setHasChildBoxes] = useState(undefined);
    const hasChildBoxesNormalized = useMemo(
      () =>
        getReset({
          hasChildBoxesFromProps: hasChildBoxes,
          hasChildBoxesFromRegister: hasChildBoxesRegistered,
        }),
      [hasChildBoxes, hasChildBoxesRegistered]
    );

    const alignXNormalized = useMemo(
      () =>
        getAlign({
          align: normalizeProps({ prop: alignX, breakpoints }),
          cssMode,
          hasChildBoxes: hasChildBoxesNormalized,
        }),
      [alignX, breakpoints, cssMode, hasChildBoxesNormalized]
    );
    const alignYNormalized = useMemo(
      () =>
        getAlign({
          align: normalizeProps({ prop: alignY, breakpoints }),
          cssMode,
          hasChildBoxes: hasChildBoxesNormalized,
        }),
      [alignY, breakpoints, cssMode, hasChildBoxesNormalized]
    );

    const leftNormalized = useMemo(
      () => normalizeProps({ prop: left, breakpoints }),
      [left, breakpoints]
    );
    const rightNormalized = useMemo(
      () => normalizeProps({ prop: right, breakpoints }),
      [right, breakpoints]
    );
    const restNormalized = useMemo(
      () => normalizeProps({ prop: rest, breakpoints }),
      [rest, breakpoints]
    );
    const colsNormalized = useMemo(
      () => normalizeProps({ prop: cols, defaultProp: parent, breakpoints }),
      [cols, parent, breakpoints]
    );

    const topNormalized = useMemo(
      () => normalizeProps({ prop: top, breakpoints }),
      [top, breakpoints]
    );
    const bottomNormalized = useMemo(
      () => normalizeProps({ prop: bottom, breakpoints }),
      [bottom, breakpoints]
    );
    const paddingNormalized = useMemo(
      () => normalizeProps({ prop: padding, breakpoints }),
      [padding, breakpoints]
    );

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

    const restPercent = useMemo(
      () =>
        getMarginsPercent({
          margin: restNormalized,
          cols: colsPercent,
          gutterX,
          parent,
          cssMode,
        }),
      [restNormalized, colsPercent, gutterX, parent, cssMode]
    );
    const leftPercent = useMemo(
      () =>
        getMarginsPercent({
          margin: leftNormalized,
          cols: colsPercent,
          gutterX,
          parent,
          cssMode,
        }),
      [leftNormalized, colsPercent, gutterX, parent, cssMode]
    );
    const rightPercent = useMemo(
      () =>
        getMarginsPercent({
          margin: rightNormalized,
          cols: colsPercent,
          gutterX,
          parent,
          cssMode,
        }),
      [rightNormalized, colsPercent, gutterX, parent, cssMode]
    );
    const topPercent = useMemo(
      () =>
        getMarginsPercent({
          margin: topNormalized,
          cols: colsPercent,
          gutterX,
          parent,
          cssMode,
        }),
      [topNormalized, colsPercent, gutterX, parent, cssMode]
    );
    const bottomPercent = useMemo(
      () =>
        getMarginsPercent({
          margin: bottomNormalized,
          cols: colsPercent,
          gutterX,
          parent,
          cssMode,
        }),
      [bottomNormalized, colsPercent, gutterX, parent, cssMode]
    );

    const styleNormalized = useMemo(
      () => normalizeProps({ prop: style, breakpoints }),
      [style, breakpoints]
    );

    const alignmentXRest = useMemo(
      () =>
        getAlignmentXRest({
          children,
          breakpoints,
          cssMode,
          colsTotal: colsNormalized,
          alignX: alignXNormalized,
          alignXRaw: alignX,
        }),
      [alignX, alignXNormalized, breakpoints, children, colsNormalized, cssMode]
    );

    useEffect(() => {
      if (register) register();
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  register: () => {
                    if (!hasChildBoxesRegistered) {
                      setHasChildBoxes(true);
                    }
                  },
                }}
              >
                {React.Children.toArray(children).map(
                  (child: React.ReactNode, index) => {
                    return React.isValidElement(child)
                      ? React.cloneElement(child as React.ReactElement<any>, {
                          rest: alignmentXRest && alignmentXRest[index],
                        })
                      : child;
                  }
                )}
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
