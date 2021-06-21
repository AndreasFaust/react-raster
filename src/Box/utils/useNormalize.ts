import getColsTotal from "./getColsTotal";
import getColsEffective from "./getColsEffective";
import normalizeProps from "./normalizeProps";
import getSpacing from "./getSpacing";
import getColspan from "./getColspan";
import getMediaQueries from "./getMediaQueries";
import useCurrentBreakpoint from "./useCurrentBreakpoint";
import normalizeSpacing from "./normalizeSpacing";
import normalizeDisplay from "./normalizeDisplay";
import getPosition from "./getPosition";

export default function useNormalize(props, context) {
  const breakpoints = props.breakpoints ||
    context.breakpoints || [0, 432, 768, 1024, 1200, 1400];

  const mergedProps = { ...context, ...props };

  const breakpoint = useCurrentBreakpoint({
    activateEventListener: props.breakpoints,
    contextBreakpoint: context.breakpoint,
    breakpoints,
  });

  const display = normalizeDisplay(breakpoints, mergedProps);

  const rowGap = normalizeProps(breakpoints, mergedProps.rowGap, "0px");
  const columnGap = normalizeProps(breakpoints, mergedProps.columnGap, "0px");

  const marginLeftInCols = normalizeSpacing(
    breakpoints,
    mergedProps.marginLeft
  );
  const marginRightInCols = normalizeSpacing(
    breakpoints,
    mergedProps.marginRight
  );
  const paddingLeftInCols = normalizeSpacing(
    breakpoints,
    mergedProps.paddingLeft
  );
  const paddingRightInCols = normalizeSpacing(
    breakpoints,
    mergedProps.paddingRight
  );

  const colspanTotal = normalizeProps(
    breakpoints,
    props.colspan || context.colspan || 1
  );

  const colsEffective = getColsEffective({
    cols: normalizeProps(breakpoints, mergedProps.cols),
    colspan: colspanTotal,
    paddingLeft: paddingLeftInCols,
    paddingRight: paddingRightInCols,
  });

  const colspan = getColspan(
    props.colspan ? colspanTotal : colsEffective,
    paddingLeftInCols,
    paddingRightInCols
  );

  const colsTotal = getColsTotal({
    cols: normalizeProps(breakpoints, mergedProps.cols),
    colspan: colspanTotal,
    marginLeft: marginLeftInCols,
    marginRight: marginRightInCols,
  });

  const margin = getSpacing({
    display,
    breakpoints,
    rowGap,
    columnGap,
    colspan: colsTotal,
    prop: "margin",
    props: mergedProps,
  });

  const padding = getSpacing({
    display,
    breakpoints,
    rowGap,
    columnGap,
    colspan: colsTotal,
    prop: "padding",
    props: mergedProps,
  });

  return {
    breakpoints,
    breakpoint,
    // cols,
    colsTotal,
    colspanTotal,
    colspan,
    margin,
    padding,
    paddingLeftInCols,
    paddingRightInCols,
    display,
    rowGap,
    columnGap,

    controlColor: mergedProps.controlColor,

    media: getMediaQueries(breakpoints),
    css: normalizeProps(breakpoints, mergedProps.css),

    width: normalizeProps(breakpoints, mergedProps.width),
    height: normalizeProps(breakpoints, mergedProps.height),
    position: getPosition(normalizeProps(breakpoints, mergedProps.position)),
    zIndex: normalizeProps(breakpoints, mergedProps.zIndex),

    left: normalizeProps(breakpoints, mergedProps.left),
    right: normalizeProps(breakpoints, mergedProps.right),
    top: normalizeProps(breakpoints, mergedProps.top),
    bottom: normalizeProps(breakpoints, mergedProps.bottom),

    templateRows: normalizeProps(breakpoints, mergedProps.templateRows),
    autoRows: normalizeProps(breakpoints, mergedProps.autoRows),
    templateColumns: normalizeProps(breakpoints, mergedProps.templateColumns),
    autoFlow: normalizeProps(breakpoints, mergedProps.autoFlow),

    order: normalizeProps(breakpoints, mergedProps.order),
    alignItems: normalizeProps(breakpoints, mergedProps.alignItems),
    alignContent: normalizeProps(breakpoints, mergedProps.alignContent),
    alignSelf: normalizeProps(breakpoints, mergedProps.alignSelf),
    justifyContent: normalizeProps(breakpoints, mergedProps.justifyContent),
    justifySelf: normalizeProps(breakpoints, mergedProps.justifySelf),

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
  };
}
