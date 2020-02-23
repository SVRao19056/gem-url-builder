import { left, right } from "../functionalUtil/either";

const validTypes = ["secure", "insecure"];
const typeMap = ["https", "http"];
const getScheme = type => {
  return validTypes.includes(type)
    ? right(typeMap[validTypes.findIndex(entry => entry === type)]) ||
        left("Invalid Type or invalid mapping")
    : left(`Invalid type type=${type}`);
};

export { getScheme };
