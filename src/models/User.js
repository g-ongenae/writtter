const _ = require("lodash");
const bcrypt = require("bcrypt");
const Boom = require("boom");
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
    this.data = undefined;
  }

  getId() {
    return this._id;
  }

  async save(values) {
    // Convert password
    if (_.has(values, "password")) {
      values.password = await this.hashPassword(values.password);
    }

    // Save
    const res = await db.query(sql`INSERT INTO users ${spreadInsert(values)}`);

    // Check saved correctly
    if (res.affectedRows === 0) {
      throw new Error("No user saved");
    }

    // Update user object
    this._id = res.insertId;
    this.data = res.data;

    return this._id;
  }

  async getData() {
    this.assertIdExists();

    if (!_.isNil(this.data)) {
      return this.data;
    }

    const [res] = await db.query(
      sql`SELECT * FROM users WHERE id = ${this._id}`
    );

    this.data = res;

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

  async findByUsername(username) {
    const res = await db.query(
      sql`SELECT * FROM users WHERE username = ${username}`
    );
    if (_.isEmpty(res) || _.get(res, "0.affectedRows") === 0) {
      throw Boom.notFound(`User ${username} not found)`);
    }

    this._id = _.get(res, "0.insertId");
    this.data = _.get(res, "0");

    return this.data;
  }

  /**
   * Generate a JSON Web Token to authenticate in the app
   * @returns {string} JSON Web Token
   */
  generateAuthToken() {
    return jwt.sign({ _id: this._id }, Config.PRIVATE_KEY);
  }

  /**
   * Check if the password is valid
   * @param {{username: string, password: string}} credential the credential to connect
   * @returns {boolean}
   */
  async checkPassword(credential) {
    // Check if the credential are valid
    if (!_.has(credential, "password") || !_.has(credential, "username")) {
      throw Boom.badRequest("Invalid credentials");
    }

    // Retrieve the user data from database
    await this.findByUsername(credential.username);

    // Check the validity of the password
    return bcrypt.compare(credential.password, this.data.password);
  }

  /**
   * Hash a password to save it in the database
   * @private
   * @param {string} password
   */
  async hashPassword(password) {
    return bcrypt.hash(password, 10);
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
