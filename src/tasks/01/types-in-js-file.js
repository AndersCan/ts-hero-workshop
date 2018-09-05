// @ts-check

/**
 * *NOT A TASK*
 * TS type checking in a JS file by using JS Docs
 */


/**
 *
 * @param {string|number} bar
 * @returns {number}
 */
export function foo(bar) {
  if (typeof bar === "string") {
    return bar.length + 3;
  } else {
    return bar * 2;
  }
}
/**
 *
 * @param {Array.<string>} buzz
 */
export function baz(buzz) {
  return buzz.length + 2;
}

/**
 *
 * @param {string|number} a
 * @param {Array.<string>} b
 */
export function burb(a, b) {
  return foo(a) + baz(b);
}

const a1 = 10;
const a2 = "100";
const b = ["a", "b", "c"];

const c1 = burb(a1, b);
const c2 = burb(a2, b);


/**
 * @typedef {Object} GoodResponse
 * @property {200} status
 * @property {{name:string}} json
 **/
/**
 * @typedef {Object} BadResponse
 * @property {500} status
 * @property {string} error
 **/

/**
 * @returns {GoodResponse | BadResponse}
 */
export function getDataFromBackEnd() {
  // ...
  // fetch("/api/something")
  // ...
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