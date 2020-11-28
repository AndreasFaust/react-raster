// @ts-nocheck
import React from "react";
import styled from "styled-components";

const ResetterTag = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

interface Props {
  cssMode: "grid" | "flex";
  className: string;
  hasChildBoxes: boolean;
  gutterX: string[];
  gutterY: string[];
  alignX: string[];
  alignY: string[];
  media: any[];
  padding?: string[];
  children: React.ReactNode;
}

const StyledResetter = styled(ResetterTag)<Props>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  ${(props) =>
    props.media.map((media, index) => {
      return media`
      width: calc(100% + (${props.gutterX[index]}));      
      margin-left: calc(-${props.gutterX[index]} / 2);
      margin-right: calc(-${props.gutterX[index]} / 2);
      margin-top: calc(-${props.gutterY[index]} / 2);
      margin-bottom: calc(-${props.gutterY[index]} / 2);

      align-items: ${props.alignY[index]};
      justify-content: ${props.alignX[index]};    
      
      padding: ${props.padding && props.padding[index]};
    `;
    })}
`;

const Resetter: React.FC<Props> = (props) => {
  if (props.cssMode === "grid") return props.children;
  return props.hasChildBoxes ? <StyledResetter {...props} /> : props.children;
};

export default Resetter;
