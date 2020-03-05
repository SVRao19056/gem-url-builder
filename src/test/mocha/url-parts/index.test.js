import { buildUrl } from "../../../url-parts/index";
import { Right, Left } from "../../../util/functionalUtil/either-Monad";
import expect from "expect";
const testCases = ["secure", "insecure", "unsecure"];
const expected = ["https", "http", "Invalid type type=unsecure"];
const testScenario = [[], [], ["failure  cases", "success cases"]];
const err = msg => `Error ${msg}`;
const sucess = msg => {
  // console.log("Sucess" + msg);
  return msg;
};
describe("build Url tests", () => {
  let errMsg = "";
  let sucessObj = {};
  let errorObj = {};
  let validDomain = "";
  beforeEach(() => {
    errMsg = "";
    sucessObj = {};
    errorObj = {};
    validDomain = "ass.scom";
  });
  it(`smoke tests for build Url test Case ${testCases[0]} expected ${expected[0]}`, () => {
    // let errMsg = "";
    // let sucessMsg = "";
    const res = buildUrl(
      testCases[0],
      validDomain,
      [],
      err => (errorObj = err),
      sucess => (sucessObj = sucess)
    );
    // console.log(sucessObj);
    expect(res).toBe(`${expected[0]}://${validDomain}`);
  });
  it(`smoke tests for build Url test Case ${testCases[1]} expected ${expected[1]}`, () => {
    const res = buildUrl(
      testCases[1],
      validDomain,
      [],
      err => (errorObj = err),
      sucess => (sucessObj = sucess)
    );
    expect(res).toBe(`${expected[1]}://${validDomain}`);
  });
  it(`smoke tests for build Url test Case ${testCases[2]} Test Scenario ${testScenario[2][0]} `, () => {
    const res = buildUrl(
      testCases[2],
      validDomain,
      [],
      err => (errorObj = err),
      sucess => (sucessObj = sucess)
    );
    expect(res).toContain(`${expected[2]}`);
    // expect(res).toBe("");
  });

  it(`smoke tests for build Url test Case ${testCases[2]} expected ${expected[2]}`, () => {
    const res = buildUrl(
      testCases[2],
      validDomain,
      [],
      err => (errorObj = err),
      sucess => (sucessObj = sucess)
    );

    expect(res).toContain(`${expected[2]}`);
  });
});
