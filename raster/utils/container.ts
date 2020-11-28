import React from "react";

interface Props {
  className: string;
  attrs?: any;
  tag?: string;
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLElement, Props>(
  ({ className, children, attrs = {}, tag = "div" }, ref) => {
    return React.createElement(
      tag,
      { ...attrs, className, ref },
      tag !== "img" ? children : undefined
    );
  }
);

export default Container;
