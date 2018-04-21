const helper = require('./helper');

class Proc {
  constructor(items) {
    this.hashMap = this.objectMap(items);
  }
  objectMap(items) {
    return items.reduce((tally, {id, temperature}) => {
      if (!tally[id]) {
        tally[id] = {count: 0, sum: 0, sensors: []};
      }
      let sensors = [...tally[id].sensors, temperature].sort();
      tally[id] = {
        count: tally[id].count + 1,
        sum: tally[id].sum + temperature,
        sensors,
      };
      return tally;
    }, {});
  }

  fillModes() {
    const newMap = {...this.hashMap};
    Object.keys(this.hashMap).map(key => {
      const mode = helper.findMode(this.hashMap[key].sensors);
      newMap[key] = {...newMap[key], mode};
    });
    this.hashMap = newMap;
    // return newMap;
    return this;
  }

  fillMedian() {
    const newMap = {...this.hashMap};
    Object.keys(this.hashMap).map(key => {
      const sensors = newMap[key].sensors.sort();
      if (!sensors || sensors.length < 1) {
        newMap[key] = {...newMap[key], median: []};
        return;
      }
      const middle = Math.floor(sensors.length / 2, 2);
      const median = sensors[middle];
      newMap[key] = {...newMap[key], median};
    });
    this.hashMap = newMap;
    // return newMap;
    return this;
  }

  fillAverage() {
    const newMap = {...this.hashMap};
    Object.keys(this.hashMap).map(key => {
      const average = helper.round(newMap[key].sum / newMap[key].count);
      newMap[key] = {...newMap[key], average};
    });
    this.hashMap = newMap;
    // return newMap;
    return this;
  }
}
module.exports = Proc;
