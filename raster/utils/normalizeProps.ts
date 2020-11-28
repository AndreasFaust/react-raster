import isArray from "./isArray";
import { FlattenInterpolation } from "styled-components";

function addValues({ array, breakpointsLength }) {
  const lastKnownValue = array[array.length - 1];
  while (array.length < breakpointsLength) {
    array.push(lastKnownValue);
  }
  return array;
}

function getArray(prop, defaultProp) {
  if (!prop) {
    if (isArray(defaultProp)) return defaultProp;
    return defaultProp ? [defaultProp] : [prop];
  }
  if (!isArray(prop)) return [prop];
  return prop;
}

interface Props {
  prop: number | number[] | string | string[];
  defaultProp?: any;
  breakpoints: number[];
}

export default function normalizeProps({
  prop,
  defaultProp,
  breakpoints,
}: Props): any[] {
  const breakpointsLength = breakpoints.length;
  let array = getArray(prop, defaultProp);

  if (array.length < breakpointsLength)
    array = addValues({ array, breakpointsLength });
  if (array.length > breakpointsLength) array = array.splice(breakpointsLength);
  return array;
}
