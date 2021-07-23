import getColsTotal from "./getColsTotal";
import getColsEffective from "./getColsEffective";
import useProp from "./useProp";
import getSpacing from "./getSpacing";
import getColspan from "./getColspan";
import useBreakpoint from "./useBreakpoint";
import normalizeSpacing from "./normalizeSpacing";
import useDisplay from "./useDisplay";
import useGap from "./useGap";
import useBreakpoints from "./useBreakpoints";

import { ContextProps } from "../../context";

export default function useNormalize(
  props,
  context: ContextProps,
  hasChildBoxes: boolean
) {
  const mergedProps = { ...context, ...props };

  const breakpoints = useBreakpoints(props.breakpoints, context.breakpoints);

  const breakpoint = useBreakpoint(
    breakpoints,
    context.breakpoint,
    props.breakpoints,
    props.colspan
  );

  const display = useDisplay(breakpoint, mergedProps.display, hasChildBoxes);

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

  function useSpacing(breakpoint, short, left, right, top, bottom) {
    const marginNormalized = useProp(margin);
  }

  const margin = useSpacing(
    breakpoint,
    props.margin,
    props.marginLeft,
    props.marginRight,
    props.marginTop,
    props.marginBottom
  );

  const marginLeftInCols = normalizeSpacing(
    breakpoints,
    mergedProps.marginLeft,
    mergedProps.margin
  );
  const marginRightInCols = normalizeSpacing(
    breakpoints,
    mergedProps.marginRight,
    mergedProps.margin
  );
  const paddingLeftInCols = normalizeSpacing(
    breakpoints,
    mergedProps.paddingLeft,
    mergedProps.padding
  );
  const paddingRightInCols = normalizeSpacing(
    breakpoints,
    mergedProps.paddingRight,
    mergedProps.padding
  );

  const colspanTotal = useProp(
    breakpoint,
    props.colspan || context.colspan || 1
  );
  const cols = useProp(breakpoint, props.cols);

  const colsEffective = getColsEffective({
    cols,
    colspan: colspanTotal,
    paddingLeft: paddingLeftInCols,
    paddingRight: paddingRightInCols,
  });

  // this gets applied to StyledBox
  const colspan = props.colspan
    ? getColspan(colspanTotal, paddingLeftInCols, paddingRightInCols)
    : colsEffective;

  // this gets applied to StyledBox
  const colsTotal = getColsTotal({
    cols: normalizeProps(breakpoints, mergedProps.cols, ""),
    colspan: colspanTotal,
    marginLeft: marginLeftInCols,
    marginRight: marginRightInCols,
  });

  const margin = getSpacing({
    display,
    breakpoints,
    gap,
    colspan: colsTotal,
    prop: "margin",
    props: mergedProps,
  });

  const padding = getSpacing({
    display,
    breakpoints,
    gap,
    colspan: colsTotal,
    prop: "padding",
    props: mergedProps,
  });

  return {
    breakpoints,
    breakpoint,
    colsTotal,
    colspanTotal,
    colspan,
    margin,
    padding,
    paddingLeftInCols,
    paddingRightInCols,
    display,
    gap,

    controlColor: mergedProps.controlColor,

    styles: normalizeProps(breakpoints, mergedProps.styles),

    width: normalizeProps(breakpoints, mergedProps.width),
    minWidth: normalizeProps(breakpoints, mergedProps.minWidth),
    maxWidth: normalizeProps(breakpoints, mergedProps.maxWidth),
    height: normalizeProps(breakpoints, mergedProps.height),
    minHeight: normalizeProps(breakpoints, mergedProps.minHeight),
    maxHeight: normalizeProps(breakpoints, mergedProps.maxHeight),
    position: normalizeProps(breakpoints, mergedProps.position, "relative"),
    zIndex: normalizeProps(breakpoints, mergedProps.zIndex),

    left: normalizeProps(breakpoints, mergedProps.left),
    right: normalizeProps(breakpoints, mergedProps.right),
    top: normalizeProps(breakpoints, mergedProps.top),
    bottom: normalizeProps(breakpoints, mergedProps.bottom),

    pointerEvents: normalizeProps(breakpoints, mergedProps.pointerEvents),
    cursor: normalizeProps(breakpoints, mergedProps.cursor),

    gridTemplateRows: normalizeProps(breakpoints, mergedProps.gridTemplateRows),
    gridColumn: normalizeProps(breakpoints, mergedProps.gridColumn),
    gridAutoRows: normalizeProps(breakpoints, mergedProps.gridAutoRows),
    gridTemplateColumns: normalizeProps(
      breakpoints,
      mergedProps.gridTemplateColumns
    ),
    autoFlow: normalizeProps(breakpoints, mergedProps.autoFlow),

    order: normalizeProps(breakpoints, mergedProps.order),
    alignItems: normalizeProps(breakpoints, mergedProps.alignItems),
    alignContent: normalizeProps(breakpoints, mergedProps.alignContent),
    alignSelf: normalizeProps(breakpoints, mergedProps.alignSelf),
    justifyContent: normalizeProps(breakpoints, mergedProps.justifyContent),
    justifyItems: normalizeProps(breakpoints, mergedProps.justifyItems),
    justifySelf: normalizeProps(breakpoints, mergedProps.justifySelf),

    flexDirection: normalizeProps(breakpoints, mergedProps.flexDirection),
    flexWrap: normalizeProps(breakpoints, mergedProps.flexWrap),
    flexShrink: normalizeProps(breakpoints, mergedProps.flexShrink),
    flexGrow: normalizeProps(breakpoints, mergedProps.flexGrow),

    border: normalizeProps(breakpoints, mergedProps.border),
    borderLeft: normalizeProps(breakpoints, mergedProps.borderLeft),
    borderRight: normalizeProps(breakpoints, mergedProps.borderRight),
    borderTop: normalizeProps(breakpoints, mergedProps.borderTop),
    borderBottom: normalizeProps(breakpoints, mergedProps.borderBottom),

    background: normalizeProps(breakpoints, mergedProps.background),
    backgroundColor: normalizeProps(breakpoints, mergedProps.backgroundColor),
    backgroundImage: normalizeProps(breakpoints, mergedProps.backgroundImage),
    backgroundPosition: normalizeProps(
      breakpoints,
      mergedProps.backgroundPosition
    ),
    backgroundAttachment: normalizeProps(
      breakpoints,
      mergedProps.backgroundAttachment
    ),
    backgroundSize: normalizeProps(breakpoints, mergedProps.backgroundSize),

    filter: normalizeProps(breakpoints, mergedProps.filter),
    backdropFilter: normalizeProps(breakpoints, mergedProps.backdropFilter),
    mixBlendMode: normalizeProps(breakpoints, mergedProps.mixBlendMode),
    backgroundBlendMode: normalizeProps(
      breakpoints,
      mergedProps.backgroundBlendMode
    ),
    textShadow: normalizeProps(breakpoints, mergedProps.textShadow),
    boxShadow: normalizeProps(breakpoints, mergedProps.boxShadow),
    textStroke: normalizeProps(breakpoints, mergedProps.textStroke),

    fontFamily: normalizeProps(breakpoints, mergedProps.fontFamily),
    fontSize: normalizeProps(breakpoints, mergedProps.fontSize),
    fontWeight: normalizeProps(breakpoints, mergedProps.fontWeight),
    fontStyle: normalizeProps(breakpoints, mergedProps.fontStyle),
    textAlign: normalizeProps(breakpoints, mergedProps.textAlign),
    color: normalizeProps(breakpoints, mergedProps.color),
    lineHeight: normalizeProps(breakpoints, mergedProps.lineHeight),
    letterSpacing: normalizeProps(breakpoints, mergedProps.letterSpacing),
    textDecoration: normalizeProps(breakpoints, mergedProps.textDecoration),
    hyphens: normalizeProps(breakpoints, mergedProps.hyphens),

    transform: normalizeProps(breakpoints, mergedProps.transform),
    transition: normalizeProps(breakpoints, mergedProps.transition),
    animation: normalizeProps(breakpoints, mergedProps.animation),
    opacity: normalizeProps(breakpoints, mergedProps.opacity),

    overflow: normalizeProps(breakpoints, mergedProps.overflow),
    overflowX: normalizeProps(breakpoints, mergedProps.overflowX),
    overflowY: normalizeProps(breakpoints, mergedProps.overflowY),
  };
}
