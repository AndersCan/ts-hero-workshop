declare function fn(x: any): any;

declare function fn(
  x: HTMLElement
): number;

declare function fn(
  x: HTMLDivElement
): string;

declare const myElem: HTMLDivElement;
const x = fn(myElem); // x: any, wat?

declare function fn2(x: string): number;
declare function fn2(x: number): string;

const z = fn2({});
// [ts] Argument of type '{}' is not
// assignable to parameter
// of type 'number'.
