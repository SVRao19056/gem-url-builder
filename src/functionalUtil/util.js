import { right, left } from "./either";

/**
 *@description This tests the value with the expression
 * @returns {Right | Left}   @see Right when RegEx test true and   @see Left when false
 * @notes This leverages the  @see Currying {@link https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/} concept
 * @param {*} expression This is a RegEx expression
 */
const validateWithRegEx = expression => value => {
  const regEx = new RegExp(expression);
  return regEx.test(value) ? right(value) : left(`Invalid Value ${value}`);
};

export { validateWithRegEx };
