const express = require("express");
require('dotenv').config();
const client = require("./utils/connection");
const PORT = process.env.PORT || 8000;
const app = express();

const users = require("./routes/users");
app.use("/users", users);

app.listen(PORT, async()=>{
    await client.connect();
    console.log(`Server is running on port ${PORT}`);
});