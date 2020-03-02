/**
 * @module util
 */
import { right, left } from "./functionalUtil/either";
import { buildDomain } from "../url-parts/domain";

/**
 * @description  This tests the value with the expression
 *
 * @summary This leverages the   Currying {@link https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/} concept
 * @returns Expected Values are {@link module:either-Monad~Right} |{@link module:either-Monad~Left}
 * @param {RegExp} expression This is a RegEx expression
 * @method
 */
const validateWithRegEx = expression => value => {
  const regEx = new RegExp(expression);
  return regEx.test(value) ? right(value) : left(`Invalid Value ${value}`);
};

/**
 * @function
 * @description Concatentates the string in the format {prefix}{key}{val}
 * @summary Original intent is to build a queryString Parameter
 * @example for key=t2 val=t2 prefix=& returns &t2=t2
 * @param {String} key
 * @param {String} val
 * @param {String} prefix
 */
const buildStr = (key, val, prefix) => {
  return typeof key === "string" &&
    typeof val === "string" &&
    typeof prefix === "string"
    ? `${prefix}${key}=${val}`
    : "";
};

/**
 * @function
 * @decription returns a query string from an object
 * @summary returns a query string intended to be appended to a url
 * @param {Object} obj
 * @example For object  {  t1: "t1", t2: "t2" } returns ?t1=t1&t2=t2
 */
const buildQueryString = obj => {
  const keyArray = Object.keys(obj);
  return keyArray
    .map((key, idx) =>
      idx === 0 ? buildStr(key, obj[key], "?") : buildStr(key, obj[key], "&")
    )
    .join()
    .replace(/[,]*/g, "");
};
export { validateWithRegEx, buildStr, buildQueryString };
