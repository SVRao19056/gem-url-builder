import expect from "expect";
import build from "../index";

describe(`Tests for index.js on root`, () => {
  it(`Smoke test for secure `, () => {
    const param = {
      param1: "param1",
      param2: "param2"
    };
    // const res = build("secure", "any.host.com",);
    expect(build("secure", "any.host.com", param)).toBeTruthy();
  });
});
