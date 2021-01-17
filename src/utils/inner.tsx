import React from "react";
import styled from "styled-components";

const InnerTag = ({ className, innerHTML, children }) =>
  innerHTML ? (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: innerHTML }}
    />
  ) : (
    <div className={className}>{children}</div>
  );

interface StyledProps {
  className: string;
  media: any[];
  alignX: string[];
  alignY: string[];
  style: string[];
  innerHTML?: string;
  hasChildBoxes: boolean;
  cssMode: "grid" | "flex";
  isGrid?: boolean;
}

const StyledInner = styled(InnerTag)<StyledProps>`
  position: relative;
  width: 100%;

  ${(props) =>
    props.media.map((media: any, index: number) => {
      return props.hasChildBoxes
        ? media`
          display: flex;
          align-items: stretch;
          justify-content: stretch;
          ${props.style && !props.isGrid && props.style[index]}
        `
        : media`
          ${(props.alignX[index] || props.alignY[index]) && `display: flex;`}
          ${props.alignX[index] && `justify-content: ${props.alignX[index]};`}
          ${props.alignY[index] && `align-items: ${props.alignY[index]};`}
          ${props.style && !props.isGrid && props.style[index]}
        `;
    })}
`;

interface Props {
  cssMode: "grid" | "flex";
  className: string;
  alignX: string[];
  alignY: string[];
  style: string[];
  media: any[];
  children: React.ReactElement;
  hasChildBoxes: boolean;
  innerHTML?: string;
  isGrid?: boolean;
}

const Inner: React.FC<Props> = ({
  media,
  className,
  alignX,
  alignY,
  style,
  children,
  cssMode,
  hasChildBoxes,
  innerHTML,
  isGrid,
}) => {
  if (cssMode === "grid") return children;
  return (
    <StyledInner
      className={className}
      media={media}
      cssMode={cssMode}
      alignX={alignX}
      alignY={alignY}
      style={style}
      hasChildBoxes={hasChildBoxes}
      isGrid={isGrid}
      innerHTML={innerHTML}
    >
      {children}
    </StyledInner>
  );
};

export default Inner;
