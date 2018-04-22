const process = require("./process");
const helper = require("./helper");

calc = input => {
  // changes input list to object with keys of id of each sensor
  const map1 = process.objectMap(input);
  const map2 = process.fillModes(map1);
  const map3 = process.fillMedian(map2);
  const map4 = process.fillAverage(map3);
  return Object.values(map4);
};

module.exports = { calc };
