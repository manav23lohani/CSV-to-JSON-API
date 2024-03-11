const express = require("express");
require('dotenv').config();
const client = require("./utils/connection");
const PORT = process.env.PORT || 8000;
const app = express();

const users = require("./routes/users");
app.use("/users", users);

const connectToDatabase = async() => {
  try {
      await client.connect();
      console.log("Connected to the database");
  } catch (error) {
      console.error("Failed to connect to the database:", error);
  }
}

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
