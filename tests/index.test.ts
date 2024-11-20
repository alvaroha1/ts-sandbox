// tests/index.test.ts
import { greet } from '../src';

test('greet returns correct greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});