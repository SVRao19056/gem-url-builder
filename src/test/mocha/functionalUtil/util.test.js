import expect from "expect";
import { validateWithRegEx } from "../../../util/functionalUtil/util";
import { Left, Right } from "../../../util/functionalUtil/either-Monad";

describe("functionalUtil/util tests", () => {
  const testValues = [
    "12.com",
    "<script>.<scrip>",
    "Acdrt.com",
    "Acrta.aaa.com",
    "Ac-rt",
    "Acrta.12ERw.com",
    "<Acrta.12ERw"
  ];
  const getRegEx = /^((([A-Za-z0-9-]+)){2,}\.+).+$/gi;
  it(`smoke tests for format validation  for value="value="${testValues[0]}"`, () => {
    expect(validateWithRegEx(getRegEx)(testValues[0])).toBeInstanceOf(Right);
  });
  it(`smoke tests for format validation for value="${testValues[1]}"`, () => {
    expect(validateWithRegEx(getRegEx)(testValues[1])).toBeInstanceOf(Left);
  });
  it(`smoke tests for format validation for value="${testValues[2]}"`, () => {
    expect(validateWithRegEx(getRegEx)(testValues[2])).toBeInstanceOf(Right);
  });
  it(`smoke tests for format validation for value="${testValues[3]}"`, () => {
    expect(validateWithRegEx(getRegEx)(testValues[3])).toBeInstanceOf(Right);
  });
  it(`smoke tests for format validation for value="${testValues[4]}"`, () => {
    expect(validateWithRegEx(getRegEx)(testValues[4])).toBeInstanceOf(Left);
  });
  it(`smoke tests for format validation for value="${testValues[5]}"`, () => {
    expect(validateWithRegEx(getRegEx)(testValues[5])).toBeInstanceOf(Right);
  });
  it(`smoke tests for format validation for value="${testValues[6]}"`, () => {
    expect(validateWithRegEx(getRegEx)(testValues[6])).toBeInstanceOf(Left);
  });
});
