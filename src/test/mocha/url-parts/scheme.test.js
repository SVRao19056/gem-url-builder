import expect from "expect";
import { getScheme } from "../../../url-parts/scheme";
import { Right, Left } from "../../../util/functionalUtil/either-Monad";

describe("Tests for Scheme", () => {
  const inValid = "unsecure";
  const valid = "secure";
  const valid_op2 = "insecure";
  it("Smoke tests for getScheme", () => {
    expect(getScheme(valid)).toBeTruthy();
  });
  it(`Test for happy path - ${valid} `, () => {
    expect(getScheme(valid)).toBeInstanceOf(Right);
  });
  it(`Test for happy path - ${valid} `, () => {
    expect(getScheme(valid)._val).toBe("https");
  });
  it(`Test for happy path option II  - ${valid_op2} `, () => {
    expect(getScheme(valid_op2)._val).toBe("http");
  });
  it("Test for sad path data type", () => {
    expect(getScheme(inValid)).toBeInstanceOf(Left);
  });
  it(`Test for sad path - invalid entry ie "${inValid}" error message`, () => {
    expect(getScheme(inValid)._val).toBe(`Invalid type type=${inValid}`);
  });
});
