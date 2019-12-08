const {
  defineTable,
  Schema,
  spreadInsert,
  spreadUpdate,
  sql
} = require("squid/pg");

const db = require("../Database");

defineTable("users", {
  id: Schema.Number,
  username: Schema.String,
  email: Schema.String,
  password: Schema.String,
  joinedAt: Schema.default(Schema.Date),
  active: Schema.Boolean,
  score: Schema.Number
});

module.exports = class User {
  constructor(id) {
    this._id = id;
  }

  async getId() {
    return this._id;
  }

  async save(values) {
    const res = await db.query(sql`INSERT INTO users ${spreadInsert(values)}`);
    this._id = res.insertId;

    return this._id;
  }

  async getData() {
    if (!this._id) {
      throw new Error("No id");
    }

    return db.query(sql`SELECT * FROM users WHERE id = ${this._id}`);
  }

  async remove() {
    if (!this._id) {
      throw new Error("No id");
    }

    return db.query(sql`DELETE FROM users WHERE id = ${this._id}`);
  }

  async update(values) {
    if (!this._id) {
      throw new Error("No id");
    }

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
};
