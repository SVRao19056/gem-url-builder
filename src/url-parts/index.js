import { getScheme } from "../url-parts/scheme";
import { buildDomain } from "../url-parts/domain";
import { either, right, left } from "../util/functionalUtil/either";
import { Right, Left } from "../util/functionalUtil/either-Monad";
import { formatQueryString } from "./queryParamters";

const extractData = (fn, key) => {
  if (!fn instanceof Function) return { [key]: null };
  return { [key]: fn().join() };
};
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

const buildUrl = (
  schemeType,
  host,
  queryParamters = {},
  leftCallBck,
  rightCallBck
) => {
  const urlParamMap = new Map(Object.entries(queryParamters));
  formatQueryString(urlParamMap);
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

  // const url = scheme.map(joinUrl);
  const outcome = Object.values(urlParts).reduce((acc, index) => {
    // console.log(acc.constructor.name, index.constructor.name);
    // console.log(
    //   acc.constructor.name === index.constructor.name &&
    //     new right("Right").constructor.name === "Right"
    // );
    return acc.constructor.name === index.constructor.name &&
      new right("Right").constructor.name === "Right"
      ? true
      : false;
  });
  const eitherObj = outcome ? new right(urlParts) : new left(urlParts);
  // console.log(eitherObj);
  either(leftCallBck, rightCallBck, eitherObj);
  return outcome;
};

export { buildUrl };
