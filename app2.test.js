const app2 = require('./app2');
const helper = require('./helper');
const input = require('./fixtures/input1');
const output = require('./fixtures/output1');

describe('app', () => {
  test('Should convert return a list', () => {
    const result = app2.calc(input);
    expect(result.length).toBe(3);
    expect(result).toEqual(output);
  });
});
