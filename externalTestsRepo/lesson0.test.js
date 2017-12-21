import lessonn0 from '../src/lesson0';

describe('sum function', () => {
  test('sum', () => {
    expect(lessonn0.task0.sum(1, 2)).toBe(3);
  });
  test('sum', () => {
    expect(() => lessonn0.task0.sum(1, {})).toThrow();
  });
  test('sum', () => {
    expect(lessonn0.task0.sum(1, 'lalka')).toBe('1lalka');
  });
  test('sum', () => {
    expect(lessonn0.task0.sum('lalka', 'lalka')).toBe('lalkalalka');
  });
  test('sum', () => {
    expect(() => lessonn0.task0.sum({}, {})).toThrow();
  });
  test('sum', () => {
    expect(lessonn0.task0.sum('lalka', 1)).toBe('lalka1');
  });
  test('sum', () => {
    expect(() => lessonn0.task0.sum([], {})).toThrow();
  });
  test('sum', () => {
    expect(lessonn0.task0.sum(1)).toBe(1);
  });
});
