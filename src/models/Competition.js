const {
  defineTable,
  Schema,
  spreadInsert,
  spreadUpdate,
  sql
} = require("squid/pg");

const db = require("../Database");

defineTable("competitions", {
  id: Schema.Number,
  creatorId: Schema.Number,
  name: Schema.String,
  description: Schema.String,
  createdAt: Schema.default(Schema.Date),
  finishAt: Schema.nullable(Schema.Date),
  winnerId: Schema.nullable(Schema.Number),
  rules: Schema.nullable(
    Schema.JSON(Schema.Object({ rulesId: Schema.Array(Schema.Number) }))
  )
});

module.exports = class Competition {
  constructor(id) {
    this._id = id;
  }

  async getId() {
    return this._id;
  }

  async save(values) {
    const res = await db.query(
      sql`INSERT INTO competitions ${spreadInsert(values)}`
    );
    this._id = res.insertId;

    return this._id;
  }

  async getData() {
    if (!this._id) {
      throw new Error("No id");
    }

    return db.query(sql`SELECT * FROM competitions WHERE id = ${this._id}`);
  }

  async getAllCompetitionsByCreator(creatorId) {
    if (creatorId) {
      throw new Error("No user id");
    }

    return db.query(
      sql`SELECT * FROM competitions WHERE creatorId = ${creatorId}`
    );
  }

  async remove() {
    if (!this._id) {
      throw new Error("No id");
    }

    return db.query(sql`DELETE FROM competitions WHERE id = ${this._id}`);
  }

  async update(values) {
    if (!this._id) {
      throw new Error("No id");
    }

    const res = await db.query(sql`
      UPDATE competitions
      SET ${spreadUpdate(values)}
      WHERE id = ${this._id}
    `);

    return res;
  }

  async search(value) {
    return db.query(
      sql`SELECT id FROM competitions WHERE name IS LIKE '%${value}%'`
    );
  }
};
