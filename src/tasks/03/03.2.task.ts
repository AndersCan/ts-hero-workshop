/**
 * If you are unfamiliar with ms.js,
 * read the first example of the readme
 * http> https://www.npmjs.com/package/ms
 *
 * We will only focus on converting time formats to milliseconds.
 * EX:
 * ms('1m')      to 60000
 * ms("2 days"); to 172800000
 *  ...etc...
 */

/**
 * Examine the types already defined
 * by ms (@types/ms)
 * vscode> Right-Click 'ms' + Go to definition
 * http> https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/ms/index.d.ts
 */
import ms from "ms";

ms("2 days"); // 172800000
ms("1d"); // 86400000
ms("10h"); // 36000000

ms("because ms accepts a string");
ms("it accepts all strings");
ms("Can we make it more typesafe?");
/**
 * Make a wrapper function for "ms"
 * that is typesafe
 *
 * YOU decide 100% how it looks and behaves :)
 */
function fullyTypedMs(
  ...somethingCool
): number {
  throw "Implement anything you want";
}
