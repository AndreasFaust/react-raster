import React from "react";
import useProp from "../useProp";

function getGapObject(gap?: string): { row?: string; column?: string } {
  if (!gap) return { row: null, column: null };
  const [row, column] = gap.split(" ");
  return { row, column };
}

export default function useGapShort(
  breakpoint: number,
  gap?: string | string[]
): { row?: string; column?: string } {
  const gapNormalized = useProp(breakpoint, gap);
  const [gapObject, setGapObject] = React.useState(
    getGapObject(gapNormalized as string)
  );
  React.useEffect(() => {
    setGapObject(getGapObject(gapNormalized as string));
  }, [gapNormalized]);

  return gapObject;
}
