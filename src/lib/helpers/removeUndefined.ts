const objectFilter = (object: Record<string, string | undefined>, predicate: (val: any) => any) => {
  return Object.fromEntries(Object.entries(object).filter(predicate));
};

export function removeUndefined(input: Record<string, string | undefined>): Record<string, string> {
  return objectFilter(input, ([key, value]) => value !== undefined) as Record<string, string>;
}
