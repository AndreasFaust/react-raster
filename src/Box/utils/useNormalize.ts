import getColsTotal from "./getColsTotal";
import getColsEffective from "./getColsEffective";
import normalizeProps from "./normalizeProps";
import getSpacing from "./getSpacing";
import getColspan from "./getColspan";
import useCurrentBreakpoint from "./useCurrentBreakpoint";
import normalizeSpacing from "./normalizeSpacing";
import normalizeDisplay from "./normalizeDisplay";
import getGap from "./getGap";

import { ContextProps } from "../../context";

export default function useNormalize(
  props,
  context: ContextProps,
  hasChildBoxes: boolean
) {
  const breakpoints = props.breakpoints ||
    context.breakpoints || [0, 432, 768, 1024, 1200, 1400];

  const mergedProps = { ...context, ...props };

  const breakpoint = useCurrentBreakpoint({
    activateEventListener: !!props.breakpoints || !!props.colspan,
    contextBreakpoint: context.breakpoint,
    breakpoints,
  });

  const display = normalizeDisplay(
    breakpoints,
    mergedProps.display,
    hasChildBoxes
  );

  const gap = getGap(props, context, breakpoints);

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

  const colspanTotal = normalizeProps(
    breakpoints,
    props.colspan || context.colspan || 1
  );

  const colsEffective = getColsEffective({
    cols: normalizeProps(breakpoints, mergedProps.cols, ""),
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
