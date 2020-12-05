import { useMemo, useContext } from "react";
import normalizeProps from "../../utils/normalizeProps";
import Context from "../../context";

export function useNormalizeString(prop: string | string[]): string[] {
  const { breakpoints } = useContext(Context);
  const normalized = useMemo(() => normalizeProps({ prop, breakpoints }), [
    prop,
    breakpoints,
  ]);
  return normalized;
}

export function useNormalizeNumber(
  prop: number | number[],
  defaultProp?: number | number[]
): number[] {
  const { breakpoints } = useContext(Context);
  const normalized = useMemo(
    () => normalizeProps({ prop, defaultProp, breakpoints }),
    [prop, breakpoints]
  );
  return normalized;
}
