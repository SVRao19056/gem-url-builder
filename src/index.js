import { buildUrl } from "./url-parts/index";
const error = val => {
  console.log(`Left -error scenario  ${val}`);
  return val;
};

const sucess = val => {
  console.log(`Right- sucess scenario ${val}`);
  console.log(val);
  return val;
};
const build = (scheme, host, UrlParameters) => {
  const res = buildUrl(scheme, host, UrlParameters, error, sucess);

  return res;
};

export default build;
