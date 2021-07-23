import React from "react";
import useProp from "../useProp";
import useGapShort from "./useGapShort";
import getGap from "./getGap";

interface Gap {
  row: string;
  column: string;
}

interface Props {
  contextGap?: Gap;
  propsGap?: string | string[];
  gridGap?: string | string[];
  rowGap?: string | string[];
  columnGap?: string | string[];
  gridColumnGap?: string | string[];
  gridRowGap?: string | string[];
  breakpoint: number;
}

const useGap = (props: Props): Gap => {
  const gap = useGapShort(props.breakpoint, props.propsGap);
  const gridGap = useGapShort(props.breakpoint, props.gridGap);
  const rowGap = useProp(props.breakpoint, props.rowGap);
  const columnGap = useProp(props.breakpoint, props.columnGap);
  const gridColumnGap = useProp(props.breakpoint, props.gridColumnGap);
  const gridRowGap = useProp(props.breakpoint, props.gridRowGap);

  return React.useMemo(
    () =>
      getGap({
        contextGap: props.contextGap,
        gap,
        gridGap,
        rowGap: rowGap as string,
        columnGap: columnGap as string,
        gridColumnGap: gridColumnGap as string,
        gridRowGap: gridRowGap as string,
      }),
    [
      props.contextGap,
      gap,
      gridGap,
      rowGap,
      columnGap,
      gridColumnGap,
      gridRowGap,
    ]
  );
};

export default useGap;
