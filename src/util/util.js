/**
 * @module util
 */
import { right, left, either } from "./functionalUtil/either";
import { Left } from "./functionalUtil/either-Monad";
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
  const validPrefixes = ["&", "?"];
  if (!validPrefixes.includes(prefix))
    return left(`Invalid prefix - ${prefix}`);
  let qStr = "";
  let eitherObj = null;
  if (!typeof key === "string")
    return left(
      `Function buildStr does not handle object key with type ${typeof key} use case`
    );
  switch (typeof val) {
    case "string": {
      eitherObj = right(`${prefix}${key}=${val}`);
      break;
    }
    case "number": {
      eitherObj = right(`${prefix}${key}="${val}"`);
      break;
    }
    case "boolean": {
      eitherObj = right(`${prefix}${key}="${val}"`);
      break;
    }
    default: {
      console.warn(`Function buildStr does not handle ${typeof val} use case`);
      eitherObj = left(
        `Function buildStr does not handle ${typeof val} use case`
      );
      break;
    }
  }
  return eitherObj;
};

/**
 * @function
 * @decription returns a query string from an object
 * @returns Expected Values are {@link module:either-Monad~Right} |{@link module:either-Monad~Left} .Value depends upon sucess or failure scenarios
 * @param {Object} obj
 */
const buildQueryString = obj => {
  let errStr = "";
  let qStr = "";
  const keyArray = Object.keys(obj);
  const eitherObj = keyArray.map((key, idx) =>
    idx === 0 ? buildStr(key, obj[key], "?") : buildStr(key, obj[key], "&")
  );
  const eitherSet = new Set(eitherObj);
  const failureSecnarios = [...eitherSet].filter(item => item instanceof Left);
  eitherObj.forEach(val =>
    either(
      err => {
        errStr = errStr.concat(..."|", ...err);
      },
      sucess => {
        qStr = qStr.concat(...sucess);
      },
      val
    )
  );

  //console.log(`error=${errStr},sucess= ${qStr}`);
  return qStr.length > 0 ? right(qStr) : left(errStr);
};
export { validateWithRegEx, buildStr, buildQueryString };
