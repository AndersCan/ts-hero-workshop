/**
 * Convert to a TypeScript file
 * 1. change extension
 * 2. add types to _EVERYTHING_
 *
 */

export function foo(bar) {
  if (typeof bar === "string") {
    return bar.length + 3;
  } else {
    return bar * 2;
  }
}

export function baz(buzz) {
  return buzz.length + 2;
}

export function burb(a, b) {
  return foo(a) + baz(b);
}

const a1 = 10;
const a2 = "100";
const b = ["a", "b", "c"];

const c1 = burb(a1, b);
const c2 = burb(a2, b);

export function getDataFromBackEnd() {
  // ...
  // fetch("/api/something")
  if (Math.random() > 0.5) {
    return {
      status: 200,
      json: {
        name: "John"
      }
    };
  } else {
    return {
      status: 500,
      error: "SERVER ERROR"
    };
  }
}