const client = require("../utils/connection");

const ageDistribution = async (req, res) => {
  try {
    // await client.connect();
    const query = `SELECT
        "Age_Group",
        ROUND((COUNT(*) * 100.0) / (SELECT COUNT(*) FROM users), 2) AS "% Distribution"
    FROM (
        SELECT
            CASE
                WHEN age < 20 THEN '<20'
                WHEN age BETWEEN 20 AND 40 THEN '20-40'
                WHEN age BETWEEN 40 AND 60 THEN '40-60'
                ELSE '>60'
            END AS "Age_Group"
        FROM
            users
    )
    GROUP BY
        "Age_Group"
    ORDER BY "Age_Group";`;
    const result = await client.query(query);
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Error while querying: " + err);
  }
};

module.exports = { ageDistribution };
