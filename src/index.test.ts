import { greet } from './index';

describe('greet', () => {
  test('given no name it should greet world', () => {
    expect(greet()).toBe('Hello, world!');
  });

  test('given a name it should greet the name', () => {
    expect(greet('Espen')).toBe('Hello, Espen!');
  });
});
