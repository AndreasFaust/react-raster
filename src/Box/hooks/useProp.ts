import React from "react";

type Prop = number | string | (number | string)[];
type ValidProp = number | string | undefined;

function convertStringToNumber(prop: ValidProp): ValidProp {
  if (typeof prop !== "string") return prop;
  const parsed = +prop;
  if (Object.is(NaN, parsed)) return prop;
  return parsed;
}

function checkForStringNotation(prop: string | number, breakpoint: number) {
  if (typeof prop !== "string") return prop;
  if (prop.includes(" | ")) {
    const propArray = prop.split(" | ");
    return normalizePropArray(propArray, breakpoint);
  }
  return prop;
}

function normalizePropArray(prop: (string | number)[], breakpoint: number) {
  if (breakpoint < prop.length) return prop[breakpoint];
  return prop[prop.length - 1];
}

function getProp(prop: Prop, breakpoint: number): ValidProp {
  if (!Array.isArray(prop)) {
    return checkForStringNotation(prop, breakpoint);
  }
  return normalizePropArray(prop, breakpoint);
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
  return React.useMemo(
    () => normalizeProp(breakpoint, prop, defaultValue),
    [breakpoint, prop, defaultValue]
  );
}
