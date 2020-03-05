import { formatQueryString } from "../../../url-parts/queryParameters";
import expect from "expect";

describe("Query Paramter tests", () => {
  it("smoke tests", () => {
    const pObj = { t1: "t1", t2: 2, t3: false };
    const keys = Object.keys(pObj);
    const values = Object.values(pObj);
    const mapObj = new Map(Object.entries(pObj));
    const retVal = formatQueryString(mapObj);
    expect(retVal._val).toBeTruthy();
    expect(retVal._val).toBe(
      `?${keys[0]}=${values[0]}&${keys[1]}="${values[1]}"&${keys[2]}="${values[2]}"`
    );
  });
});
