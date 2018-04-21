values = map => {
  return Object.keys(map).map(key => {
    return {...map[key], id: key};
  });
};

findMode = items => {
  const count = items.reduce((tally, item) => {
    tally[item] = (tally[item] || 0) + 1;
    return tally;
  }, {});
  return Object.keys(count)
    .filter(key => count[key] > 1 && key)
    .map(key => +key)
    .sort();
};

round = number => Math.round(number * 100) / 100;

module.exports = {values, findMode, round};
