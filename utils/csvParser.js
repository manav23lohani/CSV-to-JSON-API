const fs = require("fs");

function parseCSV(filePath) {
  const csvfile = fs.readFileSync(filePath);
  const arr = csvfile.toString().split("\n");
  const properties = arr[0].split(",").map((prop) => prop.trim());

  function createNestedObject(properties) {
    const result = {};
    properties.forEach((property) => {
      const keys = property.split(".");
      let temp = result;
      keys.forEach((key, index) => {
        if (!temp[key]) {
          temp[key] = {};
        }
        if (index === keys.length - 1) {
          temp[key] = "";
        }
        temp = temp[key];
      });
    });
    return result;
  }

  const jsonArray = [];

  for (let i = 1; i < arr.length; i++) {
    const entryValues = arr[i].split(",");
    const jsonObject = createNestedObject(properties);

    properties.forEach((property, j) => {
      const keys = property.split(".");
      let temp = jsonObject;
      keys.forEach((key, k) => {
        if (k === keys.length - 1) {
          temp[key] = entryValues[j].trim();
        } else {
          temp = temp[key];
        }
      });
    });

    jsonArray.push(jsonObject);
  }

  return jsonArray;
}

module.exports = {parseCSV};
