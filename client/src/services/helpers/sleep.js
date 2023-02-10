/**
 *
 * Wait for a delay time
 *
 * @param { Integer } [ms=1000]  Delay time
 * @returns { Promise.resolve<function> } Promises resolved with setTimeout
 */

export default function sleep(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
