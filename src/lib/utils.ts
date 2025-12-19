/** Combine class names, filtering out falsy values */
export const classNames = (...classes: (string | false | null | undefined)[]): string =>
  classes.filter(Boolean).join(" ");
