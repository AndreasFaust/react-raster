import { useMemo, useContext } from "react";
import normalizeProps from "../../utils/normalizeProps";
import getAlign from "../../utils/getAlign";
import Context from "../../context";

interface Props {
  hasChildBoxes?: boolean;
  align: string | string[];
}

export default function useAlign({ hasChildBoxes, align }: Props): string[] {
  const { cssMode, breakpoints } = useContext(Context);

  const alignNormalized = useMemo(
    () =>
      getAlign({
        align: normalizeProps({ prop: align, breakpoints }),
        cssMode,
        hasChildBoxes,
      }),
    [align, breakpoints, cssMode, hasChildBoxes]
  );
  return alignNormalized;
}
