const _ = require("lodash");
const bcrypt = require("bcrypt");
const {
  defineTable,
  Schema,
  spreadInsert,
  spreadUpdate,
  sql
} = require("squid/pg");
const jwt = require("jsonwebtoken");

const Config = require("../Config");
const db = require("../Database");

defineTable("users", {
  id: Schema.Number,
  username: Schema.String,
  email: Schema.String,
  password: Schema.String,
  joinedAt: Schema.default(Schema.Date),
  active: Schema.default(Schema.Boolean),
  score: Schema.default(Schema.Number)
});

module.exports = class User {
  constructor(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  async save(values) {
    // Convert password
    if (_.has(values, "password")) {
      values.password = await bcrypt.hash(values.password, 10);
    }

    // Save
    const res = await db.query(sql`INSERT INTO users ${spreadInsert(values)}`);

    // Check saved correctly
    if (res.affectedRows === 0) {
      throw new Error("No user saved");
    }

    // Update user object
    this._id = res.insertId;

    return this._id;
  }

  async getData() {
    this.assertIdExists();

    const [res] = await db.query(
      sql`SELECT * FROM users WHERE id = ${this._id}`
    );

    return res;
  }

  async getSafeData() {
    const data = await this.getData();
    data.password = undefined;

    return data;
  }

  async remove() {
    this.assertIdExists();

    return db.query(sql`DELETE FROM users WHERE id = ${this._id}`);
  }

  async update(values) {
    this.assertIdExists();

    const res = await db.query(sql`
      UPDATE users
      SET ${spreadUpdate(values)}
      WHERE id = ${this._id}
    `);

    return res;
  }

  async search(value) {
    return db.query(
      sql`SELECT id FROM users WHERE username IS LIKE '%${value}%'`
    );
  }

  async findByUsername(value) {
    const res = db.query(sql`SELECT * FROM users WHERE username = ${value}`);
    console.log("Result", res);
    this._id = res.insertId;

    return res;
  }

  /**
   * Generate a JSON Web Token to authenticate in the app
   * @returns {string} JSON Web Token
   */
  generateAuthToken() {
    return jwt.sign({ _id: this._id }, Config.PRIVATE_KEY);
  }

  /**
   * Check _id exists in the class
   * @private
   * @throws
   */
  assertIdExists() {
    if (_.isNil(this._id)) {
      throw new Error("No id");
    }
  }
};
