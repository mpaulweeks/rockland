
type Comparable = string | number | Date;

function compare<T extends Comparable>(a: T, b: T) {
  if (a < b) { return -1; }
  if (a > b) { return 1; }
  return 0;
}

export function sortBy<T, V extends Comparable>(arr: T[], cb: ((obj: T) => V)): T[] {
  const sorted = arr.concat();
  sorted.sort((a, b) => compare(cb(a), cb(b)));
  return sorted;
}
