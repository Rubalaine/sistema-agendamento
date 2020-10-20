const querybuilder = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_NAME,
    user: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_USER,
  },
});

module.exports = querybuilder;
