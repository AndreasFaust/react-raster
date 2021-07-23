import React, { useContext } from "react";

import useCombinedRefs from "./utils/useCombinedRefs";
import useResizeObserver from "./utils/useResizeObserver";
import useNormalize from "./utils/useNormalize";
import useControl from "./utils/useControl";
import useUndefinedProps from "./utils/useUndefinedProps";
import useIntersect from "./utils/useIntersect";

import Context from "../context";
import StyledBox from "./StyledBox";
import Control from "../Control";
import { Props } from "./props";

const Box = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const context = useContext(Context);

  const [hasChildBoxes, registerChildBox] = React.useState(false);
  React.useEffect(() => {
    if (typeof context.registerChildBox === "function") {
      context.registerChildBox();
    }
  }, []);

  const propsNormalized = useNormalize(props, context, hasChildBoxes);

  const controlIsVisible = useControl(props.control, context.controlIsVisible);
  const boxRef = useCombinedRefs(ref);
  const undefinedProps = useUndefinedProps(props);

  const breakpoint = {
    index: propsNormalized.breakpoint + 1,
    value: propsNormalized.breakpoints[propsNormalized.breakpoint],
  };

  const defaultClass = `Box bp-${breakpoint.value} bp-${breakpoint.index}`;

  useResizeObserver(boxRef, props.onResize);
  useIntersect({
    ref: boxRef,
    root: props.root,
    rootMargin: props.rootMargin,
    threshold: props.threshold,
    onIntersect: props.onIntersect,
  });

  return (
    <StyledBox
      {...propsNormalized}
      tag={props.as} // avoid name-collision with styled-component’s "as"
      component={props.component}
      className={
        props.className
          ? [defaultClass, props.className].join(" ")
          : defaultClass
      }
      controlIsVisible={controlIsVisible}
      ref={boxRef}
      styles={propsNormalized.styles as string}
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
            gap: propsNormalized.gap,
            colspan: propsNormalized.colspan,
            controlIsVisible,
            controlColor: propsNormalized.controlColor,
            registerChildBox: () => registerChildBox(true),
          }}
        >
          {props.children}
        </Context.Provider>
      </>
    </StyledBox>
  );
});

Box.displayName = "Box";

export default React.memo(Box);
