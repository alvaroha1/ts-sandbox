export function euclideanDistance(pointA: [number, number], pointB: [number, number]): number {
  const [x1, y1] = pointA;
  const [x2, y2] = pointB;

  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}