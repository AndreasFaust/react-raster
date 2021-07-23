import React from "react";

type Prop = number | string | (number | string)[];
type ValidProp = number | string;

function convertStringToNumber(prop: ValidProp): ValidProp {
  if (typeof prop !== "string") return prop;
  if (typeof +prop === "number") return +prop;
  return prop;
}

function getProp(prop: Prop, breakpoint: number): ValidProp {
  if (!Array.isArray(prop)) {
    return prop;
  }
  if (prop.length >= breakpoint) return prop[breakpoint];
  return prop[prop.length - 1];
}

function normalizeProp(
  breakpoint: number,
  prop?: Prop,
  defaultValue?: ValidProp
): ValidProp {
  if (typeof prop === "undefined" || prop === null) {
    return defaultValue;
  }
  return convertStringToNumber(getProp(prop, breakpoint));
}

export default function useProp(
  breakpoint: number,
  prop?: Prop,
  defaultValue?: ValidProp
): ValidProp {
  const validProp = React.useMemo(
    () => normalizeProp(breakpoint, prop, defaultValue),
    [breakpoint, prop, defaultValue]
  );
  return validProp;
}
