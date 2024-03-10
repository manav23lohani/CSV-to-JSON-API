const express = require("express");
const router = express.Router();
const {uploadUsers}= require("../controllers/upload");
const {ageDistribution} = require("../controllers/distribution");

router.post("/upload", uploadUsers);
router.get("/distribution/age", ageDistribution);

module.exports = router;