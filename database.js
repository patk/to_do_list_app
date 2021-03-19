const pgp = require("pg-promise")();

const { pghost, pgport, pgdatabase, pguser, pgpassword } = require("./config");

const connection = `postgres://${pguser}:${pgpassword}@${pghost}:${pgport}/${pgdatabase}`;

const database = pgp(connection);

module.exports = database;
