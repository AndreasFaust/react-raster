export default function isArray(prop: any): boolean {
  if (!prop) return false;
  return prop.constructor === Array;
}
