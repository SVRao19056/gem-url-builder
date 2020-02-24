import { getScheme } from "../url-parts/scheme";
import { buildDomain } from "../url-parts/domain";
import { either } from "../functionalUtil/either";

const buildUrl = (schemeType, host, leftCallBck, rightCallBck) => {
  const joinUrl = val => val;
  const scheme = getScheme(schemeType);
  const rhost = buildDomain(host);
  const jRes = scheme.join();

  const mRes = scheme.map(joinUrl);
  const cRes = scheme.chain(joinUrl);
  const eitherRes = either(leftCallBck, rightCallBck, jRes);

  return {
    joinRes: jRes,
    mapRes: mRes,
    chainRes: cRes,
    rHost: rhost,
    eRes: eitherRes
  };
};

export { buildUrl };
