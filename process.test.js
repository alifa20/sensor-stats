const process = require('./process');
const input = require('./fixtures/input1');
const hashMap = require('./fixtures/hashMap1');

describe('objectMap', () => {
  test('Should map list of sensors to hashMap', () => {
    const result = process.objectMap(input);
    const keys = Object.keys(result);
    expect(keys.length).toBe(3);
    keys.map(key => {
      expect(result[key]).toHaveProperty('count');
      expect(result[key]).toHaveProperty('sum');
      expect(result[key]).toHaveProperty('sensors');
    });
  });
});

describe('fillModes', () => {
  test('Should add mode property to hashMap', () => {
    let input = {
      a: {count: 1, sum: 1, sensors: []},
      b: {count: 4, sum: 1, sensors: []},
    };
    const result = process.fillModes(input);
    Object.keys(input).map(key => {
      expect(result[key]).toHaveProperty('count');
      expect(result[key]).toHaveProperty('sum');
      expect(result[key]).toHaveProperty('sensors');
      expect(result[key]).toHaveProperty('mode');
    });
  });
  test('Should be valid modes', () => {
    const result = process.fillModes(hashMap);
    Object.keys(result).map(key => {
      expect(result[key]).toHaveProperty('count');
      expect(result[key]).toHaveProperty('sum');
      expect(result[key]).toHaveProperty('sensors');
      expect(result[key]).toHaveProperty('mode');
    });
    expect(result.a.mode).toEqual([3.53]);
    expect(result.c.mode).toEqual([3.36, 3.96]);
    expect(result.b.mode).toEqual([4.15]);
  });
});

describe('fillMedian', () => {
  test('Should add median property to hashMap', () => {
    let input = {
      a: {count: 1, sum: 1, sensors: []},
      b: {count: 4, sum: 1, sensors: []},
    };
    const result = process.fillMedian(input);
    Object.keys(input).map(key => {
      expect(result[key]).toHaveProperty('count');
      expect(result[key]).toHaveProperty('sum');
      expect(result[key]).toHaveProperty('sensors');
      expect(result[key]).toHaveProperty('median');
    });
  });
  test('Should be valid medians', () => {
    const result = process.fillMedian(hashMap);
    Object.keys(result).map(key => {
      expect(result[key]).toHaveProperty('count');
      expect(result[key]).toHaveProperty('sum');
      expect(result[key]).toHaveProperty('sensors');
      expect(result[key]).toHaveProperty('median');
    });
    expect(result.a.median).toEqual(3.66);
    expect(result.b.median).toEqual(4.15);
    expect(result.c.median).toEqual(3.95);
  });
});

describe('fillAverage', () => {
  test('Should add average property to hashMap', () => {
    let input = {
      a: {count: 1, sum: 1, sensors: []},
      b: {count: 4, sum: 1, sensors: []},
    };
    const result = process.fillAverage(input);
    Object.keys(input).map(key => {
      expect(result[key]).toHaveProperty('count');
      expect(result[key]).toHaveProperty('sum');
      expect(result[key]).toHaveProperty('sensors');
      expect(result[key]).toHaveProperty('average');
    });
  });
  test('Should be valid medians', () => {
    const result = process.fillAverage(hashMap);
    Object.keys(result).map(key => {
      expect(result[key]).toHaveProperty('count');
      expect(result[key]).toHaveProperty('sum');
      expect(result[key]).toHaveProperty('sensors');
      expect(result[key]).toHaveProperty('average');
    });
    expect(result.a.average).toEqual(3.78);
    expect(result.b.average).toEqual(4.08);
    expect(result.c.average).toEqual(3.72);
  });
});
