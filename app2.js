const process = require('./process');
const helper = require('./helper');

calc = input => {
  const map1 = process.objectMap(input);
  const map2 = process.fillModes(map1);
  const map3 = process.fillMedian(map2);
  const map4 = process.fillAverage(map3);
  const res = helper.values(map4);
  return res;
};

module.exports = {calc};
