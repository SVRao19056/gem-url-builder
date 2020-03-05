import expect from "expect";
import {
  validateWithRegEx,
  buildStr,
  buildQueryString
} from "../../../util/util";
import { Left, Right } from "../../../util/functionalUtil/either-Monad";
describe("util - tests", () => {
  const testObj = {
    t1: "t1",
    t2: "t2"
  };
  describe("Validate function validateWithRegEx", () => {
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

  describe("Validate function buildStr", () => {
    const bool = true;

    it("smoke tests", () => {
      expect(buildStr("key", "valu", "?")).toBeTruthy();
      expect(buildStr("key", "valu", "?")).toBeInstanceOf(Right);
      expect(buildStr("key", "valu", "?")._val).toBe("?key=valu");
    });
    it("failure cases - invalid type", () => {
      expect(buildStr(bool, "valu", "?")).toBeInstanceOf(Right);
      expect(buildStr(bool, "valu", "?")._val).toBe("?true=valu");
      //console.log(buildStr(bool, "valu", "?"));
    });
    it("failure cases - invalid type - 2nd param", () => {
      expect(buildStr("aa", bool, "?")).toBeInstanceOf(Right);
      expect(buildStr(bool, "valu", "?")._val).toBe("?true=valu");
    });
    it("failure cases - invalid type - 3rd param", () => {
      expect(buildStr("aa", "ddf", bool)).toBeInstanceOf(Left);
      expect(buildStr("aa", "ddf", bool)._val).toBe("Invalid prefix - true");
    });
    it("failure cases - invalid type - all params", () => {
      expect(buildStr(bool, bool, bool)).toBeInstanceOf(Left);
    });
  });

  describe("Validate function buildQueryString", () => {
    it("buildQueryString smoke tests", () => {
      expect(buildQueryString(testObj)).toBeTruthy();
      expect(buildQueryString(testObj)._val).toBe("?t1=t1&t2=t2");
    });
  });
});
