
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

export function getPrevInArray<T>(elm: T, arr: T[], matcher?: (a: T, b: T) => boolean): T {
  const matchingElm = matcher ? arr.filter(e => matcher(e, elm))[0] : undefined;
  const index = arr.indexOf(matchingElm ?? elm);
  const newIndex = (arr.length + index - 1) % arr.length;
  return arr[newIndex];
}

export function getNextInArray<T>(elm: T, arr: T[], matcher?: (a: T, b: T) => boolean): T {
  const matchingElm = matcher ? arr.filter(e => matcher(e, elm))[0] : undefined;
  const index = arr.indexOf(matchingElm ?? elm);
  const newIndex = (arr.length + index + 1) % arr.length;
  return arr[newIndex];
}
