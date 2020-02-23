import { Left, Right } from "./either-Monad";

Left.of = function(x) {
  return new Left(x);
};

Right.of = function(x) {
  return new Right(x);
};

const left = x => Left.of(x);
const right = x => Right.of(x);
/**
 *
 * @param {function} leftFn representing the error path
 * @param {function} rightFn representing the happy path
 * @param {object} e instance of Left @see Left or Right @see Right
 */
function either(leftFn, rightFn, e) {
  return e instanceof Left ? leftFn(e._val) : rightFn(e._val);
}
export { left, right, either };
