import { buildUrl } from "../../../url-parts/index";
import { Right, Left } from "../../../functionalUtil/either-Monad";
import expect from "expect";
const testCases = ["secure", "insecure", "unsecure"];
const expected = ["https", "http", "Invalid type type=unsecure"];
describe("build Url tests", () => {
  it(`smoke tests for build Url test Case ${testCases[0]} expected ${expected[0]}`, () => {
    const res = buildUrl(testCases[0], "ass.scom");
    expect(res.eRes).toBe(expected[0]);
  });
  it(`smoke tests for build Url test Case ${testCases[1]} expected ${expected[1]}`, () => {
    const res = buildUrl(testCases[1], "ass.scom");
    expect(res.eRes).toBe(expected[1]);
  });
  it(`smoke tests for build Url test Case ${testCases[1]} expected instance of Right`, () => {
    const res = buildUrl(testCases[1], "ass.scom");
    expect(res.joinRes).toBeInstanceOf(Right);
    expect(res.mapRes).toBeInstanceOf(Right);
  });
  it(`smoke tests for build Url test Case ${testCases[2]} expected Instance of left`, () => {
    const res = buildUrl(testCases[2], "ass.scom");
    expect(res.chainRes).toBeInstanceOf(Left);
  });
  it(`smoke tests for build Url test Case ${testCases[2]} expected ${expected[2]}`, () => {
    const res = buildUrl(testCases[2], "ass.scom");
    expect(res.eRes).toBe(expected[2]);
  });
});
