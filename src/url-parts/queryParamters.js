const formatQueryString = param => {
  let firstOne, rest;
  const paramObj = Object.fromEntries(param.entries());

  for (let qStr of param) {
    const [key, val] = qStr;
    console.log(key, val);
  }
  return true;

  const retArray = [];
  if (typeof param) return retArray;
  const first = param[0];
  const otherParams = param[1];
  if (first) {
    if (!Array.isArray(param)) return retArray;
    if (first.length > 1) return retArray;
    for (const entry of first.values()) {
      if (entry) retArray.push(entry);
    }
  }

  return retArray;
};

export { formatQueryString };
