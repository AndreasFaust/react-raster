import useColspanEffective from "./useColspanEffective";
import useProp from "./useProp";
import useSpacing from "./useSpacing";
import useColspan from "./useColspan";
import useBreakpoint from "./useBreakpoint";
import useDisplay from "./useDisplay";
import useGap from "./useGap";
import useBreakpoints from "./useBreakpoints";
import useSpacingCSS from "./useSpacingCSS";

import { ContextProps } from "../../context";

export default function useNormalize(
  props,
  context: ContextProps,
  hasChildBoxes: boolean
) {
  const breakpoints = useBreakpoints(props.breakpoints, context.breakpoints);
  const breakpoint = useBreakpoint(
    breakpoints,
    context.breakpoint,
    props.breakpoints,
    props.colspan
  );
  const display = useDisplay(breakpoint, props.display, hasChildBoxes);
  const gap = useGap({
    contextGap: context.gap,
    propsGap: props.gap,
    gridGap: props.gridGap,
    rowGap: props.rowGap,
    columnGap: props.columnGap,
    gridColumnGap: props.gridColumnGap,
    gridRowGap: props.gridRowGap,
    breakpoint,
  });
  const marginRaw = useSpacing(
    breakpoint,
    props.margin,
    props.marginLeft,
    props.marginRight,
    props.marginTop,
    props.marginBottom
  );
  const paddingRaw = useSpacing(
    breakpoint,
    props.padding,
    props.paddingLeft,
    props.paddingRight,
    props.paddingTop,
    props.paddingBottom
  );

  const colspanTotal = useProp(
    breakpoint,
    props.colspan || context.colspan || 1
  );
  const cols = useProp(breakpoint, props.cols);
  const colsEffective = useColspanEffective(
    cols as number,
    colspanTotal as number,
    paddingRaw
  );
  // this gets applied to StyledBox
  const colspan = useColspan(
    props.colspan,
    colspanTotal as number,
    paddingRaw,
    colsEffective
  );
  // this gets applied to StyledBox
  const colsTotal = useColspanEffective(
    cols as number,
    colspanTotal as number,
    marginRaw
  );

  const margin = useSpacingCSS(gap, colsTotal, marginRaw);
  const padding = useSpacingCSS(gap, colsTotal, paddingRaw);

  const styles = useProp(breakpoint, props.styles);

  const width = useProp(breakpoint, props.width);
  const minWidth = useProp(breakpoint, props.minWidth);
  const maxWidth = useProp(breakpoint, props.maxWidth);
  const height = useProp(breakpoint, props.height);
  const minHeight = useProp(breakpoint, props.minHeight);
  const maxHeight = useProp(breakpoint, props.maxHeight);
  const position = useProp(breakpoint, props.position, "relative");
  const zIndex = useProp(breakpoint, props.zIndex);

  const left = useProp(breakpoint, props.left);
  const right = useProp(breakpoint, props.right);
  const top = useProp(breakpoint, props.top);
  const bottom = useProp(breakpoint, props.bottom);

  const pointerEvents = useProp(breakpoint, props.pointerEvents);
  const cursor = useProp(breakpoint, props.cursor);

  const gridTemplateRows = useProp(breakpoint, props.gridTemplateRows);
  const gridColumn = useProp(breakpoint, props.gridColumn);
  const gridAutoRows = useProp(breakpoint, props.gridAutoRows);
  const gridTemplateColumns = useProp(breakpoint, props.gridTemplateColumns);
  const autoFlow = useProp(breakpoint, props.autoFlow);

  const order = useProp(breakpoint, props.order);
  const alignItems = useProp(breakpoint, props.alignItems);
  const alignContent = useProp(breakpoint, props.alignContent);
  const alignSelf = useProp(breakpoint, props.alignSelf);
  const justifyContent = useProp(breakpoint, props.justifyContent);
  const justifyItems = useProp(breakpoint, props.justifyItems);
  const justifySelf = useProp(breakpoint, props.justifySelf);

  const flexDirection = useProp(breakpoint, props.flexDirection);
  const flexWrap = useProp(breakpoint, props.flexWrap);
  const flexShrink = useProp(breakpoint, props.flexShrink);
  const flexGrow = useProp(breakpoint, props.flexGrow);

  const border = useProp(breakpoint, props.border);
  const borderLeft = useProp(breakpoint, props.borderLeft);
  const borderRight = useProp(breakpoint, props.borderRight);
  const borderTop = useProp(breakpoint, props.borderTop);
  const borderBottom = useProp(breakpoint, props.borderBottom);

  const background = useProp(breakpoint, props.background);
  const backgroundColor = useProp(breakpoint, props.backgroundColor);
  const backgroundImage = useProp(breakpoint, props.backgroundImage);
  const backgroundPosition = useProp(breakpoint, props.backgroundPosition);
  const backgroundAttachment = useProp(breakpoint, props.backgroundAttachment);
  const backgroundSize = useProp(breakpoint, props.backgroundSize);

  const filter = useProp(breakpoint, props.filter);
  const backdropFilter = useProp(breakpoint, props.backdropFilter);
  const mixBlendMode = useProp(breakpoint, props.mixBlendMode);
  const backgroundBlendMode = useProp(breakpoint, props.backgroundBlendMode);
  const textShadow = useProp(breakpoint, props.textShadow);
  const boxShadow = useProp(breakpoint, props.boxShadow);
  const textStroke = useProp(breakpoint, props.textStroke);

  const fontFamily = useProp(breakpoint, props.fontFamily);
  const fontSize = useProp(breakpoint, props.fontSize);
  const fontWeight = useProp(breakpoint, props.fontWeight);
  const fontStyle = useProp(breakpoint, props.fontStyle);
  const textAlign = useProp(breakpoint, props.textAlign);
  const color = useProp(breakpoint, props.color);
  const lineHeight = useProp(breakpoint, props.lineHeight);
  const letterSpacing = useProp(breakpoint, props.letterSpacing);
  const textDecoration = useProp(breakpoint, props.textDecoration);
  const hyphens = useProp(breakpoint, props.hyphens);

  const transform = useProp(breakpoint, props.transform);
  const transition = useProp(breakpoint, props.transition);
  const animation = useProp(breakpoint, props.animation);
  const opacity = useProp(breakpoint, props.opacity);

  const overflow = useProp(breakpoint, props.overflow);
  const overflowX = useProp(breakpoint, props.overflowX);
  const overflowY = useProp(breakpoint, props.overflowY);

  return {
    breakpoints,
    breakpoint,
    colsTotal,
    colspanTotal,
    colspan,
    margin,
    padding,
    display,
    gap,
    controlColor: props.controlColor || context.controlColor,

    styles,

    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    position,
    zIndex,

    left,
    right,
    top,
    bottom,

    pointerEvents,
    cursor,

    gridTemplateRows,
    gridColumn,
    gridAutoRows,
    gridTemplateColumns,
    autoFlow,

    order,
    alignItems,
    alignContent,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,

    flexDirection,
    flexWrap,
    flexShrink,
    flexGrow,

    border,
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,

    background,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundAttachment,
    backgroundSize,

    filter,
    backdropFilter,
    mixBlendMode,
    backgroundBlendMode,
    textShadow,
    boxShadow,
    textStroke,

    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    textAlign,
    color,
    lineHeight,
    letterSpacing,
    textDecoration,
    hyphens,

    transform,
    transition,
    animation,
    opacity,

    overflow,
    overflowX,
    overflowY,
  };
}
