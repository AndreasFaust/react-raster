import React from "react";
import useProp from "../useProp";
import SpacingObject from "./spacingObject";
import convertIfNumber from "./convertIfNumber";

function getShortArray(spacing: string | number): (string | number)[] {
  if (typeof spacing === "number") {
    return [spacing];
  }
  return spacing.split(" ").map((string) => convertIfNumber(string));
}

function getShortObject(spacing?: string): SpacingObject {
  if (!spacing) return { top: null, bottom: null, left: null, right: null };
  const shortArray = getShortArray(spacing);

  switch (shortArray.length) {
    case 1:
      return {
        top: shortArray[0],
        right: shortArray[0],
        bottom: shortArray[0],
        left: shortArray[0],
      };
    case 2:
      return {
        top: shortArray[0],
        right: shortArray[1],
        bottom: shortArray[0],
        left: shortArray[1],
      };
    case 3:
      return {
        top: shortArray[0],
        right: shortArray[1],
        bottom: shortArray[2],
        left: shortArray[1],
      };
    default:
      return {
        top: shortArray[0],
        right: shortArray[1],
        bottom: shortArray[2],
        left: shortArray[3],
      };
  }
}

export default function useSpacingShort(
  breakpoint: number,
  spacing?: string | string[]
): SpacingObject {
  const spacingNormalized = useProp(breakpoint, spacing);
  const [spacingObject, setSpacingObject] = React.useState(
    getShortObject(spacingNormalized as string)
  );
  React.useEffect(() => {
    setSpacingObject(getShortObject(spacingNormalized as string));
  }, [spacingNormalized]);

  return spacingObject;
}
