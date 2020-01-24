const _ = require("lodash");
const {
  defineTable,
  Schema,
  spreadInsert,
  spreadUpdate,
  sql
} = require("squid/pg");

const db = require("../Database");

defineTable("comments", {
  id: Schema.Number,
  authorId: Schema.default(Schema.Number),
  storyId: Schema.default(Schema.Number),
  content: Schema.String,
  createdAt: Schema.default(Schema.Date)
});

module.exports = class Comment {
  constructor(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  async save(values) {
    const res = await db.query(
      sql`INSERT INTO comments ${spreadInsert(values)}`
    );
    this._id = res.insertId;

    return this._id;
  }

  async getData() {
    this.assertIdExists();

    return db.query(sql`SELECT * FROM comments WHERE id = ${this._id}`);
  }

  async getAllCommentsOwnedByAUser(authorId) {
    if (authorId) {
      throw new Error("No user id");
    }

    return db.query(sql`SELECT * FROM comments WHERE authorId = ${authorId}`);
  }

  async getAllCommentsRelatedToAStory(storyId) {
    if (storyId) {
      throw new Error("No story id");
    }

    return db.query(sql`SELECT * FROM comments WHERE storyId = ${storyId}`);
  }

  async remove() {
    this.assertIdExists();

    return db.query(sql`DELETE FROM comments WHERE id = ${this._id}`);
  }

  async update(values) {
    this.assertIdExists();

    const res = await db.query(sql`
      UPDATE comments
      SET ${spreadUpdate(values)}
      WHERE id = ${this._id}
    `);

    return res;
  }

  async search(value) {
    return db.query(
      sql`SELECT id FROM comments WHERE name IS LIKE '%${value}%'`
    );
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
