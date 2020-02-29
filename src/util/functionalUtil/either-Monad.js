/**
 * @description This are the foundation classes for the Either pattern. The approach adopted has been proposed by the below tutorial
 * @tutiorial https://jrsinclair.com/articles/2019/elegant-error-handling-with-the-js-either-monad/
 * @copyright  2020 James Sinclair.
 */
class Left {
  constructor(val) {
    this._val = val;
  }

  map() {
    return this;
  }
  join() {
    return this;
  }
  chain() {
    return this;
  }
  getClassName() {
    return Left.name;
  }
  toString() {
    const str = this._val.toString();
    return `${this.getClassName()}(${str})`;
  }
}
/**
 * @description This is one of  the foundation classes for the Either pattern. The approach adopted has been proposed by the below tutorial
 * @tutiorial https://jrsinclair.com/articles/2019/elegant-error-handling-with-the-js-either-monad/
 * @copyright  2020 James Sinclair.
 */
class Right {
  constructor(val) {
    this._val = val;
  }

  map(fn) {
    return new Right(fn(this._val));
  }
  join() {
    if (this._val instanceof Left || this._val instanceof Right) {
      return this._val;
    }
    return this;
  }
  chain(fn) {
    return fn(this._val);
  }
  getClassName() {
    return Right.name;
  }
  toString() {
    const str = this._val.toString();
    return `${this.getClassName()}(${str})`;
  }
}

export { Right, Left };
