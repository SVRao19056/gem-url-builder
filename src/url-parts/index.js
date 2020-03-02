/**
 *  @module url-parts
 */
import { getScheme } from "../url-parts/scheme";
import { buildDomain } from "../url-parts/domain";
import { either, right, left } from "../util/functionalUtil/either";
import { Right, Left } from "../util/functionalUtil/either-Monad";
import { formatQueryString } from "./queryParameters";

/**
 * @function
 * @param {module:either-Monad~Right | module:either-Monad~Left } fn Expected Values are {@link module:either-Monad~Right Right} or |{@link module:either-Monad~Left Left}
 * @param {String} key the property identifier for object segment
 * @return {Object} with the key and the value in the  {@link module:either-Monad~Right Right} or {@link module:either-Monad~Left Left} function
 */
const extractData = (fn, key) => {
  if (!fn instanceof Function) return { [key]: null };
  return { [key]: fn().join() };
};
/*
const getOutcome = res => {
  let resp = {};
  let leftFlg = false;
  let rightFlag = false;
  if (!res instanceof Object) return res;

  for (let key in res) {
    if (!res[key].constructor.name) return resp;
    switch (res[key].constructor.name) {
      case "Left": {
        resp = Object.assign(resp, {
          [key]: {
            value: res[key],
            leftFlag: true,
            rightFlg: false
          }
        });
        break;
      }
      case "Right": {
        resp = Object.assign(resp, {
          [key]: {
            value: res[key],
            leftFlag: false,
            rightFlg: true
          }
        });
        break;
      }
      default: {
        resp = Object.assign(resp, {
          [key]: {
            value: res[key],
            leftFlag: false,
            rightFlg: false,
            error: res[key].prototype.constructor
          }
        });
        break;
      }
    }
  }
  return resp;
};
*/
/**
 * @function
 * @param {*} schemeType
 * @param {*} host
 * @param {*} queryParamters
 * @param {*} leftCallBck
 * @param {*} rightCallBck
 */
const buildUrl = (
  schemeType,
  host,
  queryParamters = {},
  leftCallBck,
  rightCallBck
) => {
  let urlParts = {};
  const joinUrl = val => val;
  const scheme = getScheme(schemeType).join();
  urlParts = Object.assign(
    urlParts,
    extractData(getScheme.bind(this, schemeType), "scheme")
  );
  urlParts = Object.assign(
    urlParts,
    extractData(buildDomain.bind(this, host), "domain")
  );
  const urlParamMap = new Map(Object.entries(queryParamters));
  if (urlParamMap.size > 0) {
    urlParts = Object.assign(
      urlParts,
      extractData(formatQueryString.bind(this, urlParamMap), "queryParameters")
    );
  }
  const outcomeSet = new Set(Object.values(urlParts));
  const errorArr = [...outcomeSet].filter(x => x.constructor.name === "Left");
  let outcome = errorArr.length === 0;
  // let outcome = Object.values(urlParts).reduce((acc, item) => {
  //   return acc && item.constructor.name === "Right" ? true : false;
  // });
  const eitherObj = outcome ? right(urlParts) : left(urlParts);
  either(leftCallBck, rightCallBck, eitherObj);
  return outcome;
};

export { buildUrl };
