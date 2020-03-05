/**
 *  @module url-parts
 */
import { getScheme } from "../url-parts/scheme";
import { buildDomain } from "../url-parts/domain";
import { either, right, left } from "../util/functionalUtil/either";
import { Right, Left } from "../util/functionalUtil/either-Monad";
import { formatQueryString } from "./queryParameters";

const processOutcome = outcome => payload => {
  return outcome
    ? payload.reduce(
        (acc, item, idx) =>
          (acc =
            idx === 0
              ? acc.concat(`${item._val}`, "://")
              : acc.concat(`${item._val}`)),
        ""
      )
    : payload.reduce(
        (acc, item, idx) =>
          (acc = acc.concat(`Error  #${idx}-description${item._val}`)),
        ""
      );
};
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
/**
 * @function
 * @param {*} schemeType
 * @param {*} host
 * @param {*} queryParamters
 * @param {*} leftCallBck
 * @param {*} rightCallBck
 */
const buildUrl = (schemeType, host, queryParamters = {}) => {
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
  const payload = Object.values(urlParts);

  // let final = Object.values(urlParts).reduce((acc, item) => {
  //   return acc._val.concat(item._val);
  // });

  return processOutcome(outcome)(payload);
};

export { buildUrl };
