export default function convertIfNumber(string: string): string | number {
  const parsed = +string;
  if (Object.is(NaN, parsed)) return string;
  return parsed;
}
