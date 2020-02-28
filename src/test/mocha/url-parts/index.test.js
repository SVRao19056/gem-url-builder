import { buildUrl } from "../../../url-parts/index";
import { Right, Left } from "../../../util/functionalUtil/either-Monad";
import expect from "expect";
const testCases = ["secure", "insecure", "unsecure"];
const expected = ["https", "http", "Invalid type type=unsecure"];
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
    console.log(sucessObj);
    expect(Object.keys(sucessObj).includes("scheme")).toBe(true);
    expect(Object.keys(sucessObj).includes("domain")).toBe(true);
    expect(sucessObj["scheme"]._val).toBe(expected[0]);
    expect(sucessObj["domain"]._val).toBe(validDomain);
    // expect(sucessObj).toBe(expected[0]);
    // expect(errMsg).toBe("");
  });
  it(`smoke tests for build Url test Case ${testCases[1]} expected ${expected[1]}`, () => {
    const res = buildUrl(
      testCases[1],
      validDomain,
      [],
      err => (errorObj = err),
      sucess => (sucessObj = sucess)
    );
    expect(Object.keys(sucessObj).includes("scheme")).toBe(true);
    expect(Object.keys(sucessObj).includes("domain")).toBe(true);
    expect(sucessObj["scheme"]._val).toBe(expected[1]);
    expect(sucessObj["domain"]._val).toBe(validDomain);
  });
  it(`smoke tests for build Url test Case ${testCases[1]} expected instance of Right`, () => {
    const res = buildUrl(
      testCases[1],
      validDomain,
      [],
      err => (errorObj = err),
      sucess => (sucessObj = sucess)
    );
    expect(Object.keys(sucessObj).includes("scheme")).toBe(true);
    expect(Object.keys(sucessObj).includes("domain")).toBe(true);
    expect(sucessObj["scheme"]).toBeInstanceOf(Right);
    expect(sucessObj["domain"]._val).toBe(validDomain);
    // expect(res.joinRes).toBeInstanceOf(Right);
    // expect(res.mapRes).toBeInstanceOf(Right);
  });
  it(`smoke tests for build Url test Case ${testCases[2]} expected Instance of left`, () => {
    const res = buildUrl(
      testCases[2],
      validDomain,
      [],
      err => (errorObj = err),
      sucess => (sucessObj = sucess)
    );
    expect(Object.keys(errorObj).includes("scheme")).toBe(true);
    expect(Object.keys(errorObj).includes("domain")).toBe(true);
    expect(res).toBe(false);
    expect(errorObj["scheme"]).toBeInstanceOf(Left);
    expect(errorObj["domain"]).toBeInstanceOf(Right);
    expect(errorObj["domain"]._val).toBe(validDomain);
    expect(errorObj["scheme"]._val).toBe(expected[2]);
  });
  it(`smoke tests for build Url test Case ${testCases[2]} expected ${expected[2]}`, () => {
    const res = buildUrl(
      testCases[2],
      validDomain,
      [],
      err => (errorObj = err),
      sucess => (sucessObj = sucess)
    );
    expect(Object.keys(errorObj).includes("scheme")).toBe(true);
    expect(Object.keys(errorObj).includes("domain")).toBe(true);
    expect(errorObj["scheme"]).toBeInstanceOf(Left);
    expect(errorObj["scheme"]._val).toBe(expected[2]);
    expect(errorObj["domain"]).toBeInstanceOf(Right);
    expect(errorObj["domain"]._val).toBe(validDomain);
    expect(res).toBe(false);
  });
});
