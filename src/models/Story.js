const _ = require("lodash");
const Boom = require("boom");
const moment = require("moment");
const {
  defineTable,
  Schema,
  spreadInsert,
  spreadUpdate,
  sql
} = require("squid/pg");

const db = require("../Database");

defineTable("stories", {
  id: Schema.Number,
  ownerId: Schema.Number,
  currentEditorId: Schema.nullable(Schema.Number),
  semaphoreTakenAt: Schema.nullable(Schema.Date),
  competitionId: Schema.nullable(Schema.Number),
  name: Schema.String,
  description: Schema.nullable(Schema.String),
  createdAt: Schema.default(Schema.Date),
  lastEditedAt: Schema.default(Schema.Date),
  isPublic: Schema.default(Schema.Boolean),
  isCommentsDisabled: Schema.default(Schema.Boolean),
  content: Schema.nullable(Schema.String),
  rules: Schema.nullable(
    Schema.JSON(Schema.Object({ rulesId: Schema.Array(Schema.Number) }))
  )
});

module.exports = class Story {
  constructor(id) {
    this._id = id;
  }

  async getId() {
    return this._id;
  }

  async save(values) {
    const res = await db.query(
      sql`INSERT INTO stories ${spreadInsert(values)}`
    );
    this._id = res.insertId;

    return this._id;
  }

  async getData() {
    if (!this._id) {
      throw new Error("No id");
    }

    return db.query(sql`SELECT * FROM stories WHERE id = ${this._id}`);
  }

  async getAllStoriesByOwner(ownerId) {
    if (ownerId) {
      throw new Error("No user id");
    }

    return db.query(sql`SELECT * FROM stories WHERE ownerId = ${ownerId}`);
  }

  async remove() {
    if (!this._id) {
      throw new Error("No id");
    }

    return db.query(sql`DELETE FROM stories WHERE id = ${this._id}`);
  }

  async update(values, userId) {
    console.debug("Values to update", values);
    if (!this._id) {
      throw new Error("No id");
    }

    const resGet = await db.query(
      sql`SELECT currentEditorId, semaphoreTakenAt FROM stories WHERE id = ${this._id}`
    );
    console.debug("Result of get to check semaphore", resGet);
    if (!_.isNil(resGet.currentEditorId)) {
      const isSemaphoreStillValid = moment().isBefore(
        moment(resGet.semaphoreTakenAt)
      );
      if (resGet.currentEditorId !== userId && isSemaphoreStillValid) {
        throw Boom.locked("Another user is already editing this story.");
      } else {
        // Will reset values if not defined.
        values.semaphoreTakenAt = values.semaphoreTakenAt || null;
        values.currentEditorId = values.currentEditorId || null;
        console.debug("Values to update modified", values);
      }
    }

    const resPut = await db.query(sql`
      UPDATE stories
      SET ${spreadUpdate(values)}
      WHERE id = ${this._id}
    `);

    return resPut;
  }

  async search(value) {
    return db.query(
      sql`SELECT id FROM stories WHERE name IS LIKE '%${value}%'`
    );
  }
};
