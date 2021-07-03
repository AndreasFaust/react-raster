function addValues({ propArray, breakpointsLength }) {
  const lastKnownValue = propArray[propArray.length - 1];
  while (propArray.length < breakpointsLength) {
    propArray.push(lastKnownValue);
  }
  return propArray;
}

function makeArray(prop?: number | number[] | string | string[]): any[] {
  if (Array.isArray(prop)) return [...prop];
  else return [prop];
}

export default function normalizeProps(
  breakpoints: number[],
  prop?: number | number[] | string | string[],
  defaultValue?: string | number
): any[] {
  if (typeof prop === undefined || typeof prop === null) return [];
  const breakpointsLength = breakpoints.length;
  let propArray = makeArray(prop);
  if (propArray.length < breakpointsLength)
    propArray = addValues({ propArray, breakpointsLength });
  if (propArray.length > breakpointsLength)
    propArray = propArray.splice(breakpointsLength);
  return propArray.map((prop) => {
    if (typeof prop === "undefined") {
      return defaultValue;
    } else {
      return prop;
    }
  });
}
