import expect from "expect";
import { Left, Right } from "../../../functionalUtil/either-Monad";
import { right, left } from "../../../functionalUtil/either";

const fn = function test(val) {
  return typeof val === "string"
    ? val.concat(`-appendToSimulateSomeProcess`)
    : val;
};
describe("Left and Right quality checks", () => {
  describe("Left smoke tests ", () => {
    const sut = new Left("test msg");
    const expected = `${sut.getClassName()}(test msg)`;

    it("Validate Left", () => {
      // const sut = new Left("test msg");
      expect(sut).toBeInstanceOf(Left);
    });
    it("Validate  String()", () => {
      expect(sut.toString()).toBe(expected);
    });
    it("Validate  map()", () => {
      expect(sut.map()).toBeInstanceOf(Left);
      expect(sut.map(fn).toString()).toBe(expected);
    });
    it("Validate  chain()", () => {
      expect(sut.chain()).toBeInstanceOf(Left);
      expect(sut.chain(fn).toString()).toBe(expected);
    });
    it("Validate join", () => {
      expect(sut.join()).toBeInstanceOf(Left);
      expect(sut.join().toString()).toBe(expected);
      expect(
        sut
          .map(fn)
          .join()
          .toString()
      ).toBe(expected);
    });
  });
  describe("Right smoke tests ", () => {
    const testMsg = "test msg";
    const sut = new Right(testMsg); //system under test

    it("Validate Right", () => {
      //expect(sut ,'expected instance of Left actual is  ${instanceOf left').toBeInstanceOf(Left);
      expect(sut).toBeInstanceOf(Right);
    });
    it("Validate to String()", () => {
      const expected = `${sut.getClassName()}(${testMsg})`;
      expect(sut.toString()).toBe(expected);
    });
    it("Validate to map()", () => {
      expect(sut.map(fn)).toBeInstanceOf(Right);
      expect(sut.map(fn).toString()).toBe(
        `${sut.getClassName()}(${testMsg}-appendToSimulateSomeProcess)`
      );
    });
    it("Validate to chain()", () => {
      //this returns the existing value which is the same as map() since it is the previous operation
      expect(sut.chain(fn)).toBe(`${testMsg}-appendToSimulateSomeProcess`);
    });
    it("Validate to join() scenario value is Right or Left", () => {
      expect(sut.map(fn)).toBeInstanceOf(Right);
      const sut1 = new Right(sut);
      expect(
        sut1
          .map(fn)
          .join()
          .toString()
      ).toBe(`${sut.getClassName()}(${testMsg})`);
    });
  });
  describe("Validate the Right map function", () => {
    let rightObj = null;
    const rtMsg = "Right";
    beforeEach("set up the prerequites", () => {
      rightObj = new Right(rtMsg);
    });
    it("validate map happy path", () => {
      const testMsg = "concat";
      const conCatFn = msg => msg.concat(testMsg);
      expect(rightObj.map(conCatFn)).toBeInstanceOf(Right);
      expect(rightObj.map(conCatFn)._val).toBe(`${rtMsg}${testMsg}`);
    });

    it("validate map sad path", () => {
      const emptytestMsg = "";
      const conCatFn = msg =>
        emptytestMsg
          ? right(msg.concat(emptytestMsg))
          : left("Error-must have some value");
      expect(rightObj.map(conCatFn)).toBeTruthy();
      expect(rightObj.map(conCatFn).join()).toBeInstanceOf(Left);
      expect(rightObj.map(conCatFn).join()._val).toContain("Error-");
    });
  });
  describe("Validate the Right chain function", () => {
    let rightObj = null;
    const rtMsg = "Right";
    beforeEach("set up the prerequites", () => {
      rightObj = new Right(rtMsg);
    });
    it("validate chain happy path", () => {
      const testMsg = "concat";
      const conCatFn = msg => msg.concat(testMsg);
      expect(typeof rightObj.chain(conCatFn)).toBe("string");
      expect(rightObj.chain(conCatFn)).toBe(`${rtMsg}${testMsg}`);
    });

    it("validate map sad path", () => {
      const emptytestMsg = "";
      const conCatFn = msg =>
        emptytestMsg
          ? right(msg.concat(emptytestMsg))
          : left("Error-must have some value");
      expect(rightObj.chain(conCatFn)).toBeTruthy();
      expect(rightObj.chain(conCatFn)).toBeInstanceOf(Left);
      expect(rightObj.chain(conCatFn)._val).toContain("Error-");
    });
  });
});
