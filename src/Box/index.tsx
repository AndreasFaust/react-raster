import React, { useEffect, useContext } from "react";
import { nanoid } from "nanoid/non-secure";

import useCombinedRefs from "./utils/useCombinedRefs";
import useResizeObserver from "./utils/useResizeObserver";
import useNormalize from "./utils/useNormalize";
import useControl from "./utils/useControl";

import Context from "../context";
import StyledBox from "./StyledBox";
import Control from "../Control";
import { Props } from "./props";

const Box = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const context = useContext(Context);
  const propsNormalized = useNormalize(props, context);
  const id = React.useRef(nanoid());

  const controlIsVisible = useControl(props.control, context.controlIsVisible);

  const boxRef = useCombinedRefs(ref);
  useResizeObserver(boxRef, props.onResize);
  return (
    <StyledBox
      id={id}
      {...propsNormalized}
      component={props.component}
      className={props.className ? ["Box", props.className].join(" ") : "Box"}
      controlIsVisible={controlIsVisible}
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
        {controlIsVisible && (
          <Control isNewGrid={!!props.colspan} {...propsNormalized} />
        )}
        <Context.Provider
          value={{
            breakpoints: propsNormalized.breakpoints,
            breakpoint: propsNormalized.breakpoint,
            rowGap: propsNormalized.rowGap,
            columnGap: propsNormalized.columnGap,
            colspan: propsNormalized.cols,
            media: propsNormalized.media,
            controlIsVisible,
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
