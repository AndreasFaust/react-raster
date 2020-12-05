import { useMemo, useContext } from "react";
import getMarginsPercent from "../../utils/getMarginsPercent";
import Context from "../../context";

interface Props {
  prop: number[];
  cols: number[];
}

export default function useMarginPercent({ prop, cols }: Props): string[] {
  const { cssMode, gutterX, parent } = useContext(Context);
  const percentValue = useMemo(
    () =>
      getMarginsPercent({
        margin: prop,
        cols,
        gutterX,
        parent,
        cssMode,
      }),
    [prop, cols, gutterX, parent, cssMode]
  );
  return percentValue;
}
