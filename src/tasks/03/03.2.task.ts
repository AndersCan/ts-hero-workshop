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

enum TimeUnit {
  days = "days",
  hours = "hours",
  minutes = "minutes",
  seconds = "seconds"
}

function fullyTypedMs(
  amount: number,
  unit: TimeUnit
): number {
  return ms(`${amount} ${unit}`);
}

fullyTypedMs(1, "days");

// alt 2
interface InterfaceTimeUnit {
  days: "days";
  hours: "hours";
  minutes: "minutes";
  seconds: "seconds";
}

function fullyTypedMs2(
  amount: number,
  unit: keyof InterfaceTimeUnit
): number {
  return ms(`${amount} ${unit}`);
}

fullyTypedMs2(1, "days");

// alt 3
export const tuple = <
  T extends string[]
>(
  ...args: T
) => args;

const list = tuple(
  "days",
  "hours",
  "minutes",
  "seconds"
);
type TimeUnit4 = typeof list[number]; // 'a'|'b'|'c'

function fullyTypedMs3(
  amount: number,
  unit: TimeUnit4
): number {
  return ms(`${amount} ${unit}`);
}

fullyTypedMs3(2, "days");
