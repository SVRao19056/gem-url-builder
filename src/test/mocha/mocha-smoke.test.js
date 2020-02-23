import assert from "assert";

describe("Basic smoke test for mocha testing framework", () => {
  it("should return the number of characters in a string", () => {
    const expected = 5;
    const actual = "Hello";
    assert.equal(
      "Hello".length,
      expected,
      `Expected ${expected} Actual ${actual.length}`
    );
  });
  it("should return the first character", () => {
    const expected = "H";
    const actual = "Hello";
    const assertion = () => actual.charAt(0);
    assert.equal(
      assertion(),
      expected,
      `Expected ${expected} Actual ${assertion()}`
    );
  });
});
