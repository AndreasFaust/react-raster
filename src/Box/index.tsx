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

  const defaultClass = `Box bp-${propsNormalized.breakpoint.value} bp-${propsNormalized.breakpoint.index}`;

  useResizeObserver(boxRef, props.onResize);
  return (
    <StyledBox
      {...propsNormalized}
      id={id.current}
      tag={props.as}
      component={props.component}
      className={
        props.className
          ? [defaultClass, props.className].join(" ")
          : defaultClass
      }
      controlIsVisible={controlIsVisible}
      ref={boxRef}
      styles={propsNormalized.styles}
      isControl={props.isControl}
      attrs={{
        ...undefinedProps,
        ...(props.innerHTML && {
          dangerouslySetInnerHTML: { __html: props.innerHTML },
        }),
      }}
    >
      <>
        {controlIsVisible && (
          <Control isNewGrid={!!props.colspan} {...propsNormalized} />
        )}
        <Context.Provider
          value={{
            breakpoints: propsNormalized.breakpoints,
            breakpoint: propsNormalized.breakpoint,
            gridRowGap: propsNormalized.gridRowGap,
            gridColumnGap: propsNormalized.gridColumnGap,
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
