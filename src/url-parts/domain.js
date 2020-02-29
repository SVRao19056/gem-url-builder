import { left, right } from "../util/functionalUtil/either";

/**
 * @description This returns the host name
 * @returns when truthy a see [right]{@link right} and when falsely a see [left]{@link  left }
 * @notes it is recomended to use a regular expression composing with  see {@link validateWithRegEx}
 * @param {String} host  This is the host name
 *
 */
const buildDomain = host => {
  return host ? right(host) : left(`Error- Invalid host value ${host}`);
};

export { buildDomain };
