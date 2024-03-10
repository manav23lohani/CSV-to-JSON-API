const client = require("../utils/connection");
const {parseCSV} = require("../utils/csvParser");

const uploadUsers = async (req, res) => {
  try {
    const csvFilePath = process.env.CSV_FILE_PATH;
    const users = parseCSV(csvFilePath);
    // await client.connect();

    for (const user of users) {
      const fullName = `${user.name.firstName} ${user.name.lastName}`;
      const age = parseInt(user.age);
      const address = JSON.stringify(user.address);
      const additionalInfo = {};

      for (const key in user) {
        if (key !== "name" && key !== "age" && key !== "address") {
          additionalInfo[key] = user[key];
        }
      }
      const query = {
        text: "INSERT INTO public.users (name, age, address, additional_info) VALUES ($1, $2, $3, $4)",
        values: [fullName, age, address, JSON.stringify(additionalInfo)],
      };

      await client.query(query);
    }
    res.send("Users inserted successfully");
  } catch (error) {
    console.error("Error inserting users:", error);
    res.send("Failed to insert, try again");
  }
};

module.exports = {uploadUsers};
