import { left, right, either } from "../../../functionalUtil/either";
import { Right, Left } from "../../../functionalUtil/either-Monad";
import expect from "expect";
const fn = function test(val) {
  return typeof val === "string"
    ? val.concat(`-appendToSimulateSomeProcess`)
    : val;
};
describe("Validate either and related classes", () => {
  const msg = "-test msg";

  it("validates right smoke test", () => {
    expect(right(msg)).toBeInstanceOf(Right);
    expect(right(msg).toString()).toBe(`${right(msg).getClassName()}(${msg})`);
  });
  it("validates left smoke test", () => {
    expect(left(msg)).toBeInstanceOf(Left);
  });
  it("validates either smoke test and happy path (Right)", () => {
    expect(right(msg)._val).toBe(msg);
    expect(left(msg)._val).toBe(msg);
    expect(either(x => "", fn, right(msg))).toBe(
      `${msg}-appendToSimulateSomeProcess`
    );
  });
  it("validates either sad (Error) path (Left)", () => {
    expect(right(msg)._val).toBe(msg);
    expect(left(msg)._val).toBe(msg);
    expect(either(fn, x => "", left(msg))).toBe(
      `${msg}-appendToSimulateSomeProcess`
    );
  });
});
