import styled from "styled-components";
import { AnyStyledComponent } from "styled-components";

export default function styledCustom(Element: AnyStyledComponent, props) {
  return styled(Element)`
    ${(props) => {
      return props.media.map((media, index: number) => {
        return media`
          ${props.style[index]}   
        `;
      });
    }}
  `;
}
