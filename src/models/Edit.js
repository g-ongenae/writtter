const _ = require("lodash");
const {
  defineTable,
  Schema,
  spreadInsert,
  spreadUpdate,
  sql
} = require("squid/pg");

const db = require("../Database");

defineTable("edits", {
  id: Schema.Number,
  editorId: Schema.Number,
  storyId: Schema.Number,
  edit: Schema.String,
  editedAt: Schema.default(Schema.Date)
});

module.exports = class Edit {
  constructor(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  async save(values) {
    const res = await db.query(sql`INSERT INTO edits ${spreadInsert(values)}`);
    this._id = res.insertId;

    return this._id;
  }

  async getData() {
    this.assertIdExists();

    return db.query(sql`SELECT * FROM edits WHERE id = ${this._id}`);
  }

  async getAllEditsOwnedByAUser(editorId) {
    if (editorId) {
      throw new Error("No user id");
    }

    return db.query(sql`SELECT * FROM edits WHERE editorId = ${editorId}`);
  }

  async getAllEditsRelatedToAStory(storyId) {
    if (storyId) {
      throw new Error("No story id");
    }

    return db.query(sql`SELECT * FROM edits WHERE storyId = ${storyId}`);
  }

  async remove() {
    this.assertIdExists();

    return db.query(sql`DELETE FROM edits WHERE id = ${this._id}`);
  }

  async update(values) {
    this.assertIdExists();

    const res = await db.query(sql`
      UPDATE edits
      SET ${spreadUpdate(values)}
      WHERE id = ${this._id}
    `);

    return res;
  }

  async search(value) {
    return db.query(sql`SELECT id FROM edits WHERE name IS LIKE '%${value}%'`);
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
