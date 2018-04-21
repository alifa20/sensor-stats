const helper = require('./helper');

describe('Hashmap', () => {
  test('Should convert hashMap to a list', () => {
    const input = {a: {count: 1}, b: {count: 2}, c: {count: 4}, d: {count: 3}};
    const result = helper.values(input);
    expect(result).toEqual([
      {id: 'a', count: 1},
      {id: 'b', count: 2},
      {id: 'c', count: 4},
      {id: 'd', count: 3},
    ]);
  });
  test('Should handle empty object', () => {
    const input = {};
    const result = helper.values(input);
    expect(result).toEqual([]);
  });
});

describe('findMode', () => {
  test('should find most seen items', () => {
    const input = [1, 1, 2, 4, 1, 2];
    const res = helper.findMode(input);
    expect(res).toEqual([1, 2]);
  });

  test('should find most seen items unsorted', () => {
    const input = [3, 3, 1, 1, 2, 4, 1, 2];
    const res = helper.findMode(input);
    expect(res).toEqual([1, 2, 3]);
  });
});

describe('round', () => {
  test('should find rounds numbers to 2 decimals', () => {
    let res = helper.round(3.777);
    expect(res).toBe(3.78);
    res = helper.round(3.77);
    expect(res).toBe(3.77);
    res = helper.round(3);
    expect(res).toBe(3);
    res = helper.round(3.771);
    expect(res).toBe(3.77);
  });
});
