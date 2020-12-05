import { useMemo, useContext } from "react";
import getColsPercent from "../../utils/getColsPercent";
import Context from "../../context";

interface Props {
  cols: number[];
  left: number[];
  right: number[];
  parent: number[];
}
type PercentValue = number[];

export default function useColsPercent({
  cols,
  left,
  right,
  parent,
}: Props): PercentValue {
  const { cssMode } = useContext(Context);

  const percentValue = useMemo(
    () =>
      getColsPercent({
        cols,
        left,
        right,
        parent,
        cssMode,
      }),
    [cols, left, right, parent, cssMode]
  );
  return percentValue;
}
