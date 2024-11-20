import { euclideanDistance } from "../src/euclidean";

type TestCase = {
  pointA: [number, number];
  pointB: [number, number];
  expected: number;
};

const testCases: TestCase[] = [
  { pointA: [0, 0], pointB: [0, 0], expected: 0 }, // zero distance
  { pointA: [0, 0], pointB: [3, 4], expected: 5 }, // General case
  { pointA: [1, 1], pointB: [1, 10], expected: 9 }, // Axis-aligned points (same x-axis)
  { pointA: [1000, 1000], pointB: [-1000, -1000], expected: 2828.427 }, // Large coordinates
  { pointA: [0.0001, 0.0001], pointB: [0.0002, 0.0002], expected: 0.0001414 }, // Small floats
];

describe("calculate the euclidean distance between two points", () => {
  test.each(testCases)(
    "Given two points should calculate the euclidean distance between both points",
    ({ pointA, pointB, expected }) => {
      // Given two values , point A and pointB
      // When
      const res = euclideanDistance(pointA, pointB);
      // Then
      expect(res).toBeCloseTo(expected);
    }
  );
});
