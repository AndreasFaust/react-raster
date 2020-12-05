import normalizeProps from "./normalizeProps";

interface Props {
  rest?: { id: string; width: number[] }[];
  breakpoints: number[];
  id: string;
}

export default function normalizeRest({
  rest,
  id,
  breakpoints,
}: Props): number[] {
  if (!rest) {
    return normalizeProps({ prop: null, breakpoints });
  }
  return rest.find((r) => r.id === id).width;
}
