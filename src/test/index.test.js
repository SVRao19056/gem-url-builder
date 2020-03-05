import expect from "expect";
import build from "../index";

describe(`Tests for index.js on root`, () => {
  const param = {
    param1: "param1",
    param2: "param2"
  };
  const emptyObj = {};
  it(`Smoke test for secure with empty query parameters`, () => {
    expect(build("secure", "any.host.com", emptyObj)).toBeTruthy();
  });
  it(`Smoke test for secure with hydrated query parameters`, () => {
    expect(build("secure", "any.host.com", param)).toBeTruthy();
    expect(build("secure", "any.host.com", param)).toBe(
      "https://any.host.com?param1=param1&param2=param2"
    );
  });
  it(`Smoke test for insecure (http) with empty query parameters`, () => {
    expect(build("insecure", "any.host.com", emptyObj)).toBeTruthy();
  });
  it(`Smoke test for insecure (http) with hydrated query parameters`, () => {
    expect(build("insecure", "any.host.com", param)).toBe(
      "http://any.host.com?param1=param1&param2=param2"
    );
  });
});
