const _ = require("lodash");
const Boom = require("boom");
const MySQL = require("promise-mysql");

const Config = require("./Config");

class Database {
  constructor() {}

  async connect() {
    this.connection = await MySQL.createConnection({
      host: Config.HOST,
      user: Config.USERNAME,
      password: Config.PASSWORD,
      database: Config.DATABASE
    });
  }

  async query(q) {
    if (!this.connection) {
      console.error(`Unable to execute query: ${q}`);
      throw Boom.serverUnavailable("No database connection");
    }

    if (_.isString(q)) {
      return this.connection.query(q);
    } else {
      q.text = q.text.replace(/"/gi, "");
      q.text = q.text.replace(/\$\d+/gi, "?");

      return this.connection.query(q.text, q.values);
    }
  }

  async close() {
    if (this.connection) {
      await this.connection.end();
    }
  }
}

module.exports = new Database();
module.exports.Database = Database;
