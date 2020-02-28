import expect from "expect";
import { buildDomain } from "../../../url-parts/domain";
import { Left, Right } from "../../../util/functionalUtil/either-Monad";

describe("Domain tests", () => {
  const testValues = ["12", "", null, undefined];

  it(`smoke tests for format validation  for value="value="${testValues[0]}"`, () => {
    expect(buildDomain(testValues[0])).toBeInstanceOf(Right);
  });
  it(`smoke tests for format validation for value="${testValues[1]}"`, () => {
    expect(buildDomain(testValues[1])).toBeInstanceOf(Left);
  });
  it(`smoke tests for format validation for value="${testValues[2]}"`, () => {
    expect(buildDomain(testValues[2])).toBeInstanceOf(Left);
  });
  it(`smoke tests for format validation for value="${testValues[3]}"`, () => {
    expect(buildDomain(testValues[3])).toBeInstanceOf(Left);
  });
});
