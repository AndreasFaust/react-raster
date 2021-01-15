import React from "react";

interface Props {
  className: string;
  attrs?: any;
  tag?: string;
  children: React.ReactNode;
  component?: React.ReactElement;
  cssMode: "grid" | "flex";
}

const Container = React.forwardRef<HTMLElement, Props>(
  (
    { className, children, component, attrs = {}, tag = "div", cssMode },
    ref
  ) => {
    if (component) {
      return React.cloneElement(component, { children, className, ...attrs });
    }
    return React.createElement(
      tag,
      {
        ...attrs,
        className,
        ref,
      },
      (tag !== "img" && !attrs.dangerouslySetInnerHTML) || cssMode === "flex"
        ? children
        : null
    );
  }
);

export default Container;
