import { expect, test } from "vitest";
import { loader } from "~/routes/$kkk";

test("--------", async () => {
  const response = await loader({
    request: new Request("http://app.com/path"),
    params: {},
    context: {},
  });
  console.log(response);
  expect(response).toBeInstanceOf(Response);

  // const data = await response.json();
  // expect(data.users).toHaveLength(10);
});
