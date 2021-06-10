import React, { useEffect, useContext } from "react";
import { nanoid } from "nanoid/non-secure";

import useCombinedRefs from "./utils/useCombinedRefs";
import useResizeObserver from "./utils/useResizeObserver";
import useNormalize from "./utils/useNormalize";

import Context from "../context";
import StyledBox from "./StyledBox";
import { ControlBox } from "../Control";
import { Props } from "./props";

const Box = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const context = useContext(Context);
  const { breakpoints, breakpoint } = useNormalize(props, context);
  const id = React.useRef(nanoid());

  const controlIsVisible = useControl(control);

  const boxRef = useCombinedRefs(ref);
  useResizeObserver(boxRef, props.onResize);

  return (
    <StyledBox
      component={props.component}
      breakpoints={breakpoints}
      className={className ? ["Box", className].join(" ") : "Box"}
      height={heightNormalized}
      cols={colsPercent}
      rest={restPercent}
      media={media}
      gapH={gapH}
      gapV={gapV}
      colspan={colsNormalized}
      hasChildBoxes={hasChildBoxesNormalized}
      alignH={alignHNormalized}
      alignV={alignVNormalized}
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
        ...(props.innerHTML && {
          dangerouslySetInnerHTML: { __html: props.innerHTML },
        }),
      }}
    >
      <>
        {controlIsVisible && <ControlBox controlColor={controlColor} />}
        <Context.Provider
          value={{
            breakpoints,
            breakpoint,
            gapH,
            gapV,
            colspan,
            media,
            parentCols: colsNormalized,
            controlIsVisible,
            controlColor,
          }}
        >
          {props.children}
        </Context.Provider>
      </>
    </StyledBox>
  );
});

Box.displayName = "Box";

export default Box;
export { Box };
