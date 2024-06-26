const _ = require("lodash");
const {
  defineTable,
  Schema,
  spreadInsert,
  spreadUpdate,
  sql
} = require("squid/pg");

const db = require("../Database");

defineTable("rules", {
  id: Schema.Number,
  ownerId: Schema.default(Schema.Number),
  name: Schema.String,
  description: Schema.String,
  createdAt: Schema.default(Schema.Date),
  isPublic: Schema.default(Schema.Boolean),
  data: Schema.JSON(Schema.Any)
});

module.exports = class Rule {
  constructor(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  async save(values) {
    const res = await db.query(sql`INSERT INTO rules ${spreadInsert(values)}`);
    this._id = res.insertId;

    return this._id;
  }

  async getData() {
    this.assertIdExists();

    return db.query(sql`SELECT * FROM rules WHERE id = ${this._id}`);
  }

  async getAllRulesOwnedByAUser(ownerId) {
    if (!ownerId) {
      throw new Error("No user id");
    }

    return db.query(sql`SELECT * FROM rules WHERE ownerId = ${ownerId}`);
  }

  async remove() {
    this.assertIdExists();

    return db.query(sql`DELETE FROM rules WHERE id = ${this._id}`);
  }

  async update(values) {
    this.assertIdExists();

    const res = await db.query(sql`
      UPDATE rules
      SET ${spreadUpdate(values)}
      WHERE id = ${this._id}
    `);

    return res;
  }

  async search(value) {
    return db.query(sql`SELECT id FROM rules WHERE name IS LIKE '%${value}%'`);
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
