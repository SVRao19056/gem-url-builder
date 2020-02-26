import { getScheme } from "../url-parts/scheme";
import { buildDomain } from "../url-parts/domain";
import { either, right } from "../functionalUtil/either";
import { Right, Left } from "../functionalUtil/either-Monad";
const extractData = (fn, key) => {
  if (!fn) return { [key]: "null" };
  return { [key]: fn().join() };
};
const buildUrl = (schemeType, host, leftCallBck, rightCallBck) => {
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
  const url = scheme.map(joinUrl);
  const jRes = scheme.join();

  const mRes = scheme.map(joinUrl);
  const cRes = scheme.chain(joinUrl);
  const eitherRes = either(leftCallBck, rightCallBck, jRes);

  return {
    joinRes: jRes,
    mapRes: mRes,
    chainRes: cRes,
    // rHost: rhost,
    eRes: eitherRes,
    urlParts: urlParts,
    url: url
  };
};

export { buildUrl };
