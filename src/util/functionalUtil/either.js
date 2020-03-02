import { Left, Right } from "./either-Monad";
/**
 * @module either
 */

Left.of = function(x) {
  return new Left(x);
};

Right.of = function(x) {
  return new Right(x);
};

const left = x => Left.of(x);
const right = x => Right.of(x);
/**
 * @function
 * @description This executes the right {Right} or left {Left} function depending upon the type of the object passed as the last parameter
 * @param {function} @callback leftFn representing the error path
 * @param {function} @callback rightFn representing the happy path
 * @param {object} e {Left | Right}
 * @requires Left
 * @requires Right
 */
function either(leftFn, rightFn, e) {
  return e instanceof Left ? leftFn(e._val) : rightFn(e._val);
}
export { left, right, either };
