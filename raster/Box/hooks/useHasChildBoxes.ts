import { useMemo } from "react";
import getReset from "../../utils/getReset";

interface Props {
  hasChildBoxes?: boolean;
  childBoxes: { left: number[]; right: number[]; cols: number[] }[];
}

export default function useHasChildBoxes({
  hasChildBoxes,
  childBoxes,
}: Props): boolean {
  const hasChildBoxesNormalized = useMemo(
    () =>
      getReset({
        hasChildBoxesFromProps: hasChildBoxes,
        hasChildBoxesFromRegister: !!childBoxes.length,
      }),
    [hasChildBoxes, childBoxes]
  );
  return hasChildBoxesNormalized;
}
