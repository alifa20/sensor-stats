const app = require('./app');
const helper = require('./helper');
const input = require('./fixtures/input1');
const output = require('./fixtures/output1');

describe('app', () => {
  test('Should convert return a list', () => {
    const result = app.calc(input);
    expect(result.length).toBe(3);
    expect(result).toEqual(output);
  });
});
