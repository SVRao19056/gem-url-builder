const compose = (...fns) => config => value =>
  fns.reduceRight((acc, fn) => fn(acc), value);

export default compose;
