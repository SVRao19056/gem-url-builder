import { formatQueryString } from "../../../url-parts/queryParameters";
import expect from "expect";

describe("Query Paramter tests", () => {
  it("smoke tests", () => {
    const pObj = { t1: "t1", t2: 2, t3: false };
    const mapObj = new Map(Object.entries(pObj));
    const retVal = formatQueryString(mapObj);
    console.log(retVal);
    expect(retVal).toBeTruthy();
    expect(retVal).toBeInstanceOf(Object);
  });
});
