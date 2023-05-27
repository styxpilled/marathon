export const t = {
  height: 0,
  width: 0,
  defaultHeight: 970,
  defaultWidth: 1920,
  translate: (v: number): number => {
    return v;
  }
}

const isNotNull = <T>(v: T | null): v is T => {
  return v !== null;
}

export { isNotNull as inn };