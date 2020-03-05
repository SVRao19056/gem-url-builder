import { buildUrl } from "./url-parts/index";
import { either } from "./util/functionalUtil/either";
// const error = val => {
//   console.log(`Left -error scenario  ${val}`);
//   return val;
// };

// const sucess = val => {
//   console.log(`Right- sucess scenario ${val}`);
//   console.log(val);
//   return val;
// };
const build = (scheme, host, UrlParameters) => {
  const res = buildUrl(scheme, host, UrlParameters);
  //console.log(`sss ${res}`);
  return res;
};

export default build;
