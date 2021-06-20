import React, { useContext } from "react";
import { nanoid } from "nanoid/non-secure";

import useCombinedRefs from "./utils/useCombinedRefs";
import useResizeObserver from "./utils/useResizeObserver";
import useNormalize from "./utils/useNormalize";
import useControl from "./utils/useControl";
import useUndefinedProps from "./utils/useUndefinedProps";

import Context from "../context";
import StyledBox from "./StyledBox";
import Control from "../Control";
import { Props } from "./props";

const Box = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const context = useContext(Context);
  const propsNormalized = useNormalize(props, context);
  const id = React.useRef<string>(nanoid());

  const controlIsVisible = useControl(props.control, context.controlIsVisible);
  const boxRef = useCombinedRefs(ref);
  const undefinedProps = useUndefinedProps(props);

  useResizeObserver(boxRef, props.onResize);
  return (
    <StyledBox
      {...propsNormalized}
      id={id.current}
      tag={props.as}
      component={props.component}
      className={props.className ? ["Box", props.className].join(" ") : "Box"}
      controlIsVisible={controlIsVisible}
      ref={boxRef}
      css={propsNormalized.css}
      attrs={{
        ...undefinedProps,
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
            colspan: propsNormalized.colspan,
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
