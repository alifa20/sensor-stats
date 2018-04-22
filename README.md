# sensor-stats

We are collecting temperature data about fridges in a supermarket. Imagine we have data from
different fridge sensors aggregated into a single JSON array (where an individual sensor is identified
by an id):

```
[{"id": "a","timestamp": 1509493641,"temperature": 3.53},
{"id": "b","timestamp": 1509493642,"temperature": 4.13},
{"id": "c","timestamp": 1509493643,"temperature": 3.96},
{"id": "a","timestamp": 1509493644,"temperature": 3.63},
{"id": "c","timestamp": 1509493645,"temperature": 3.96},
{"id": "a","timestamp": 1509493645,"temperature": 4.63},
{"id": "a","timestamp": 1509493646,"temperature": 3.53},
{"id": "b","timestamp": 1509493647,"temperature": 4.15},
{"id": "c","timestamp": 1509493655,"temperature": 3.95},
{"id": "a","timestamp": 1509493677,"temperature": 3.66},
{"id": "b","timestamp": 1510113646,"temperature": 4.15},
{"id": "c","timestamp": 1510127886,"temperature": 3.36},
{"id": "c","timestamp": 1510127892,"tempperature": 3.36},
{"id": "a","timestamp": 1510128112,"temperature": 3.67},
{"id": "b","timestamp": 1510128115,"temperature": 3.88}]
```

Create an application that outputs the average, median and mode temperature for each fridge
sensor to 2 decimal places in the following JSON format:

```
[{"id":"c","average":3.72,"median":3.95,"mode":[3.36,3.96]},
{"id":"a","average":3.78,"median":3.65,"mode":[3.53]},
{"id":"b","average":4.08,"median":4.14,"mode":[4.15]}]
```

# Implementation Guidelines:

* Use Javascript, Go, Java, Scala, Python, or C#

* Try not to spend more than 2 hours on your solution

* You will need to determine how to pass the input data to your application (reading from a file
  is ok)

* Provide instructions on how to run and test your application

* Document any assumptions and important design decisions

We are interested in how you approach the problem and choices made on how to address the above
requirements in addition to having a functional solution.

# How to run

Run `yarn`

Run `yarn test` and the unit tests should run. More testings can be added to `app.test.js` and `process.test.js`.

# Solution

We create an object named hashMap in the Proc class which has each sensor with a id as key.

Mode, average and median properties will get filled in to the hashMap object.

Count and sum will be filled in to each senor object in the hashMap object.

For example hashMap object will look like this:

```
{
  "a": {
    "sum": 23,
    "average": 4,
    mode: [3.77],
    median: [3.96],
    "sensors": [3.96, ...]

  },
  "b" :
   ....
}
```
