import spacingObject from "./spacingObject";
import convertIfNumber from "./convertIfNumber";

export default function analyzeString(short: string): spacingObject {
  const shortArray = short.split(" ").map((string) => convertIfNumber(string));
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
