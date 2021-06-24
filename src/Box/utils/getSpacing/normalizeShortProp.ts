import analyzeString from "./analyzeString";

interface accObject {
  top: (number | string)[];
  right: (number | string)[];
  bottom: (number | string)[];
  left: (number | string)[];
}

export default function normalizeShortProp(
  short: number | string | (number | string)[]
): any {
  if (!short) return { left: null, right: null, top: null, bottom: null };

  if (typeof short === "number") {
    return {
      left: short,
      right: short,
      top: short,
      bottom: short,
    };
  }
  if (typeof short === "string") {
    return analyzeString(short);
  }
  if (Array.isArray(short)) {
    return short.reduce(
      (acc: accObject, current: number | string, index: number) => {
        if (typeof current === "number") {
          return {
            left: [...acc.left, current],
            right: [...acc.right, current],
            top: [...acc.top, current],
            bottom: [...acc.bottom, current],
          };
        }
        if (typeof current === "string") {
          const currentObj = analyzeString(current);
          return {
            left: [...acc.left, currentObj.left],
            right: [...acc.right, currentObj.right],
            top: [...acc.top, currentObj.top],
            bottom: [...acc.bottom, currentObj.bottom],
          };
        }
        return {
          left: [...acc.left, acc.left[index - 1]],
          right: [...acc.right, acc.right[index - 1]],
          top: [...acc.top, acc.top[index - 1]],
          bottom: [...acc.bottom, acc.bottom[index - 1]],
        };
      },
      { left: [], right: [], top: [], bottom: [] }
    );
  }
}
