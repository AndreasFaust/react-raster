import { useMemo } from "react";
import getReset from "../../utils/getReset";

interface Props {
  hasChildBoxes?: boolean;
  hasChildBoxesRegistered?: boolean;
}

export default function useHasChildBoxes({
  hasChildBoxes,
  hasChildBoxesRegistered,
}: Props): boolean {
  const hasChildBoxesNormalized = useMemo(
    () =>
      getReset({
        hasChildBoxesFromProps: hasChildBoxes,
        hasChildBoxesFromRegister: hasChildBoxesRegistered,
      }),
    [hasChildBoxes, hasChildBoxesRegistered]
  );
  return hasChildBoxesNormalized;
}
