import { useContext } from "react";
import getMarginsPercent from "../../utils/getMarginsPercent";
import Context from "../../context";

interface Props {
  prop: number[];
  cols: number[];
}

export default function useMarginPercent({ prop, cols }: Props): string[] {
  const { cssMode, gutterX, parentCols } = useContext(Context);
  const percentValue = getMarginsPercent({
    margin: prop,
    cols,
    gutterX,
    parentCols,
    cssMode,
  });
  return percentValue;
}
