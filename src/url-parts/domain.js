import { left, right } from "../util/functionalUtil/either";
/**
 * @module domain
 */
/**
 * @function
 * @description This returns the host name
 * @summary it is recomended to use a regular expression composing with  {@link module:util}
 * @returns return either  {@link module:either-Monad~Right} or {@link module:either-Monad~Left}
 * @param {String} host  This is the host name
 *
 */
const buildDomain = host => {
  return host ? right(host) : left(`Error- Invalid host value ${host}`);
};

export { buildDomain };
