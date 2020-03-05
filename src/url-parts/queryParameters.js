/**
 * @module queryParameters
 */
import { buildQueryString } from "../util/util";
import { right, left } from "../util/functionalUtil/either";
/**
 * @function
 * @description This returns a formated query string with the key value pairs of the object passed in
 * @param {Map} param This has the key value pairs for constructing the query string
 * @returns on sucess {@link module:either-monad~Right Right} or failure {@link module:either-monad~Left Left}
 */
const formatQueryString = param => {
  if (!typeof param === Map)
    return left(
      "Formating query string failed . Invalid type passed a parameter"
    );
  const paramObj = Object.fromEntries(param.entries());
  if (!typeof paramObj === Object)
    return left(
      "Formating query string failed . Invalid type passed a parameter"
    );
  //TODO: identify error scenarios . at present errors will return empty string
  return buildQueryString(paramObj);
};
export { formatQueryString };
