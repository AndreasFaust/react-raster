import React, { useEffect, useContext } from "react";
import { nanoid } from "nanoid/non-secure";

import useCombinedRefs from "./utils/useCombinedRefs";
import useResizeObserver from "./utils/useResizeObserver";
import useNormalize from "./utils/useNormalize";

import Context from "../context";
import StyledBox from "./StyledBox";
// import { ControlBox } from "../Control";
import { Props } from "./props";

const Box = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const context = useContext(Context);
  const propsNormalized = useNormalize(props, context);
  const id = React.useRef(nanoid());

  // const controlIsVisible = useControl(control);

  const boxRef = useCombinedRefs(ref);
  useResizeObserver(boxRef, props.onResize);
  return (
    <StyledBox
      id={id}
      {...propsNormalized}
      component={props.component}
      className={props.className ? ["Box", props.className].join(" ") : "Box"}
      // controlIsVisible={propsNormalized.controlIsVisible}
      ref={boxRef}
      // customStyles={propsNormalized.css}
      attrs={{
        // ...undefinedProps,
        ...(props.innerHTML && {
          dangerouslySetInnerHTML: { __html: props.innerHTML },
        }),
      }}
      {...propsNormalized}
    >
      <>
        {/* {controlIsVisible && <ControlBox controlColor={controlColor} />} */}
        <Context.Provider
          value={{
            breakpoints: propsNormalized.breakpoints,
            breakpoint: propsNormalized.breakpoint,
            rowGap: propsNormalized.rowGap,
            columnGap: propsNormalized.columnGap,
            colspan: propsNormalized.cols,
            media: propsNormalized.media,
            // parentCols: propsNormalized.cols,
            // controlIsVisible,
            controlColor: propsNormalized.controlColor,
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
