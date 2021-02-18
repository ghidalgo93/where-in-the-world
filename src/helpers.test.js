import { coordsInRange } from "./helpers";

test("happy path: should return true if they are the exact same", () => {
  const curCoords = { x: 5, y: 9 };
  const trueCoords = { x: 5, y: 9 };
  expect(coordsInRange(curCoords, trueCoords, 0)).toBe(true);
});
test("should return true if they are equal and range is large", () => {
  const curCoords = { x: 5, y: 9 };
  const trueCoords = { x: 5, y: 9 };
  expect(coordsInRange(curCoords, trueCoords, 5)).toBe(true);
});
test("should return false if two coords are one pixed off and range is 0", () => {
  const curCoords = { x: 5, y: 9 };
  const trueCoords = { x: 5, y: 10 };
  expect(coordsInRange(curCoords, trueCoords, 0)).toBe(false);
});
test("should return true if two coords not equal, but within range", () => {
  const curCoords = { x: 9, y: 6 };
  const trueCoords = { x: 5, y: 10 };
  expect(coordsInRange(curCoords, trueCoords, 5)).toBe(true);
});
test("should return true if not equal, but just at range", () => {
  const curCoords = { x: 10, y: 5 };
  const trueCoords = { x: 5, y: 10 };
  expect(coordsInRange(curCoords, trueCoords, 5)).toBe(true);
});
