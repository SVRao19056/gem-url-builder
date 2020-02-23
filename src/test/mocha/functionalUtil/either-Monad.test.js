import expect from "expect";
import { Left, Right } from "../../../functionalUtil/either-Monad";

const fn = function test(val) {
  return typeof val === "string"
    ? val.concat(`-appendToSimulateSomeProcess`)
    : val;
};
describe("Validate Either Monad ", () => {
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

describe("Validate Either Monad ", () => {
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
