import { greet, getNameFromArgs } from './index';

describe('greet', () => {
  test('given no name it should greet world', () => {
    expect(greet()).toBe('Hello, world!');
  });

  test('given a name it should greet the name', () => {
    const name = 'Espen';
    expect(greet(name)).toBe(`Hello, ${name}!`);
  });
});

describe('getNameFromArgs', () => {
  test('given no argument it should greet world', () => {
    process.argv = [];
    expect(getNameFromArgs()).toBe('world');
  });
  test('given a argument it should greet given argument', () => {
    const name = 'Espen';
    process.argv = ['node', 'index.js', name];
    expect(getNameFromArgs()).toBe(name);
  });
});
