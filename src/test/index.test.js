import expect from "expect";
import build from "../index";

describe(`Tests for index.js on root`, () => {
  it(`Smoke test for secure `, () => {
    const res = build("secure", "any.host.com");
    expect(build("secure", "any.host.com")).toBeTruthy();
  });
});
