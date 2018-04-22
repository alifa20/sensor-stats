const helper = require("./helper");

objectMap = items => {
  return items.reduce((tally, { id, temperature }) => {
    if (!tally[id]) {
      tally[id] = { count: 0, sum: 0, sensors: [] };
    }
    let sensors = [...tally[id].sensors, temperature].sort();
    tally[id] = {
      id,
      count: tally[id].count + 1,
      sum: tally[id].sum + temperature,
      sensors
    };
    return tally;
  }, {});
};

fillModes = input => {
  const newMap = { ...input };
  Object.keys(input).map(key => {
    const mode = helper.findMode(input[key].sensors);
    newMap[key] = { ...newMap[key], mode };
  });
  return newMap;
};

fillMedian = input => {
  const newMap = { ...input };
  Object.keys(input).map(key => {
    const sensors = newMap[key].sensors.sort();
    if (!sensors || sensors.length < 1) {
      newMap[key] = { ...newMap[key], median: [] };
      return;
    }
    const middle = Math.floor(sensors.length / 2, 2);
    const median = sensors[middle];
    newMap[key] = { ...newMap[key], median };
  });
  return newMap;
};

fillAverage = input => {
  const newMap = { ...input };
  Object.keys(input).map(key => {
    const average = helper.round(newMap[key].sum / newMap[key].count);
    newMap[key] = { ...newMap[key], average };
  });
  return newMap;
};

module.exports = { objectMap, fillModes, fillMedian, fillAverage };
