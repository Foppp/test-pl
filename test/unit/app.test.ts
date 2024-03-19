import { expect, test } from "vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(5 + 4).toBe(9);
});
test("2", () => {
  expect(5 + 14).toBe(19);
});
test("3", () => {
  expect([]).toHaveLength(0);
});
test("4", () => {
  expect([3, 5]).toHaveLength(2);
});


