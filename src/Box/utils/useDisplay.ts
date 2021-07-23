import useProps from "./useProp";

export default function useDisplay(
  breakpoint: number,
  display: string | string[],
  hasChildBoxes: boolean
): string {
  const displayNormalized = useProps(breakpoint, display);
  return (displayNormalized as string) || (hasChildBoxes ? "grid" : "block");
}
