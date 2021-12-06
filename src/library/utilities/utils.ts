export function isEmpty(arr: any[]) {
  return arr.length === 0;
}

export function mapArray(entries: (string | number)[]) {
  const mappedArray: string[] = [];
  if (entries?.length) {
    mappedArray.push(entries[0].toString());
  }
  for (let i = 1; i < entries.length; ++i) {
    mappedArray.push(", " + entries[i]);
  }
  return mappedArray;
}
