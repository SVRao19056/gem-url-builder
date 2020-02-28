import { buildUrl } from "./url-parts/index";
const error = val => {
  // console.log(`Left -error scenario  ${val}`);
  return val;
};

const sucess = val => {
  // console.log(`Right- sucess scenario ${val}`);
  return val;
};
const build = (scheme, host) => {
  const res = buildUrl(scheme, host, [], error, sucess);
  return res;
};

export default build;
