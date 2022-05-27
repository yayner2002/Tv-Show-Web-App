/**
 * @jest-environment jsdom
 */
import showsNumber from './showsCount.js';

describe('showCounter', () => {
  test('result should be equal to 5', () => {
    const list = [{ name: 'levy' }, { name: 'gg' }, { name: 'oo' }, { name: 'tt' }, { name: 'ww' }];
    const result = showsNumber(list);

    expect(result).toBe(5);
  });

  test('result should be equal to 0', () => {
    const list = [];
    const result = showsNumber(list);

    expect(result).toBe(0);
  });
});