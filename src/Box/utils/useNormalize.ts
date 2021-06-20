import getColsTotal from "./getColsTotal";
import normalizeCols from "./normalizeCols";
import normalizeProps from "./normalizeProps";
import getSpacing from "./getSpacing";
import getRows from "./getRows";
import getMediaQueries from "./getMediaQueries";
import useCurrentBreakpoint from "./useCurrentBreakpoint";
import normalizeSpacing from "./normalizeSpacing";
import normalizeDisplay from "./normalizeDisplay";

export default function useNormalize(props, context) {
  const breakpoints = props.breakpoints ||
    context.breakpoints || [0, 432, 768, 1024, 1200, 1400];

  const mergedProps = { ...context, ...props };

  const breakpoint = useCurrentBreakpoint({
    activateEventListener: props.breakpoints,
    contextBreakpoint: context.breakpoint,
    breakpoints,
  });
  const colspan = normalizeProps(
    breakpoints,
    props.colspan || context.colspan || 1
  );
  // const colspanOriginal =
  //   normalizeProps(breakpoints, props.colspan) ||
  //   mergedProps.colspanOriginal ||
  //   normalizeProps(breakpoints, 1);

  const display = normalizeDisplay(breakpoints, mergedProps);

  const rowGap = normalizeProps(breakpoints, mergedProps.rowGap);
  const columnGap = normalizeProps(breakpoints, mergedProps.columnGap);

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

  const cols = normalizeCols({
    cols: props.cols,
    colspan,
    breakpoints,
    marginLeft: marginLeftInCols,
    marginRight: marginRightInCols,
  });

  const colsTotal = getColsTotal({
    cols,
    left: marginLeftInCols,
    right: marginRightInCols,
  });

  const margin = getSpacing({
    display,
    breakpoints,
    rowGap,
    columnGap,
    cols: colsTotal,
    prop: "margin",
    props: mergedProps,
  });
  const padding = getSpacing({
    display,
    breakpoints,
    rowGap,
    columnGap,
    cols: colsTotal,
    prop: "padding",
    props: mergedProps,
  });

  return {
    breakpoints,
    breakpoint,
    cols,
    colsTotal,
    colspan: normalizeCols({
      cols: props.cols,
      colspan,
      breakpoints,
      marginLeft: marginLeftInCols,
      marginRight: marginRightInCols,
      paddingLeft: paddingLeftInCols,
      paddingRight: paddingRightInCols,
    }),
    margin,
    padding,
    display,
    rowGap,
    columnGap,

    controlColor: mergedProps.controlColor,

    media: getMediaQueries(breakpoints),
    css: normalizeProps(breakpoints, mergedProps.css),

    width: normalizeProps(breakpoints, mergedProps.width),
    height: normalizeProps(breakpoints, mergedProps.height),
    // rows: getRows({
    //   gap: rowGap,
    //   cols,
    //   breakpoints,
    //   prop: mergedProps.rows,
    // }),
    position: normalizeProps(breakpoints, mergedProps.position),

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
