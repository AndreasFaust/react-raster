function addValues({ propArray, breakpointsLength }) {
  const lastKnownValue = propArray[propArray.length - 1];
  while (propArray.length < breakpointsLength) {
    propArray.push(lastKnownValue);
  }
  return propArray;
}

function makeArray(prop?: number | number[] | string | string[]): any[] {
  if (Array.isArray(prop)) return prop;
  else return [prop];
}

function getArray(
  prop?: number | number[] | string | string[],
  defaultProp?: number | number[] | string | string[]
): any[] {
  if (typeof prop === null || typeof prop === undefined) {
    return makeArray(defaultProp);
  }
  return makeArray(prop);
}

interface Props {
  prop?: number | number[] | string | string[];
  defaultProp?: number | number[] | string | string[];
  breakpoints: number[];
}

export default function normalizeProps({
  prop,
  defaultProp,
  breakpoints,
}: Props): any[] {
  const breakpointsLength = breakpoints.length;
  let propArray = getArray(prop, defaultProp);
  if (propArray.length < breakpointsLength)
    propArray = addValues({ propArray, breakpointsLength });
  if (propArray.length > breakpointsLength)
    propArray = propArray.splice(breakpointsLength);
  return propArray;
}
