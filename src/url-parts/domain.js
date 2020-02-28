import { left, right } from "../util/functionalUtil/either";

/**
 * @description This returns the host name when valid
 * @returns when truthy a @see right and when falsely a @see left
 * @notes it is recomended to use a regular expression composing with  @see validateWithRegEx
 * @param {*} host  This is the host name
 *
 */
const buildDomain = host => {
  return host ? right(host) : left(`Error- Invalid host value ${host}`);
};

export { buildDomain };
