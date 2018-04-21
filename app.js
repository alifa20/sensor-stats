const process = require('./process');
const helper = require('./helper');
const Proc = require('./Proc');

calc = input => {
  const proc = new Proc(input);
  // const map = process.objectMap(input).process.fillModes();
  // const map = {
  //   ...proc.fillModes(),
  //   ...proc.fillMedian(),
  //   ...proc.fillAverage(),
  // };
  const map = proc
    .fillModes()
    .fillAverage()
    .fillMedian().hashMap;
  const res = helper.values(map);
  return res;
};

module.exports = {calc};
