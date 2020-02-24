import { buildUrl } from "../../../url-parts/index";
import { Right, Left } from "../../../functionalUtil/either-Monad";
import expect from "expect";
const testCases = ["secure", "insecure", "unsecure"];
const expected = ["https", "http", "Invalid type type=unsecure"];
const err = msg => `Error ${msg}`;
const sucess = msg => {
  console.log("Sucess" + msg);
  return msg;
};
describe("build Url tests", () => {
  let errMsg = "";
  let sucessMsg = "";
  beforeEach(() => {
    errMsg = "";
    sucessMsg = "";
  });
  it(`smoke tests for build Url test Case ${testCases[0]} expected ${expected[0]}`, () => {
    // let errMsg = "";
    // let sucessMsg = "";
    const res = buildUrl(
      testCases[0],
      "ass.scom",
      err => (errMsg = errMsg.concat(err)),
      sucess => (sucessMsg = sucessMsg.concat(sucess))
    );
    expect(res.eRes).toBe(expected[0]);
    expect(sucessMsg).toBe(expected[0]);
    expect(errMsg).toBe("");
  });
  it(`smoke tests for build Url test Case ${testCases[1]} expected ${expected[1]}`, () => {
    const res = buildUrl(
      testCases[1],
      "ass.scom",
      err => (errMsg = errMsg.concat(err)),
      sucess => (sucessMsg = sucessMsg.concat(sucess))
    );
    expect(res.eRes).toBe(expected[1]);
    expect(sucessMsg).toBe(expected[1]);
    expect(errMsg).toBe("");
  });
  it(`smoke tests for build Url test Case ${testCases[1]} expected instance of Right`, () => {
    const res = buildUrl(
      testCases[1],
      "ass.scom",
      err => (errMsg = errMsg.concat(err)),
      sucess => (sucessMsg = sucessMsg.concat(sucess))
    );
    expect(res.joinRes).toBeInstanceOf(Right);
    expect(res.mapRes).toBeInstanceOf(Right);
  });
  it(`smoke tests for build Url test Case ${testCases[2]} expected Instance of left`, () => {
    const res = buildUrl(
      testCases[2],
      "ass.scom",
      err => (errMsg = errMsg.concat(err)),
      sucess => (sucessMsg = sucessMsg.concat(sucess))
    );
    expect(res.chainRes).toBeInstanceOf(Left);
  });
  it(`smoke tests for build Url test Case ${testCases[2]} expected ${expected[2]}`, () => {
    const res = buildUrl(
      testCases[2],
      "ass.scom",
      err => (errMsg = errMsg.concat(err)),
      sucess => (sucessMsg = sucessMsg.concat(sucess))
    );
    expect(res.eRes).toBe(expected[2]);
    expect(errMsg).toBe(expected[2]);
    expect(sucessMsg).toBe("");
  });
});
