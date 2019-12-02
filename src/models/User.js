const db = require("../Database");

module.exports = class User {
  constructor() {
    this.names = {
      table: "users",
      id: "id",
      username: "username",
      score: "score",
      joined: "joined",
      email: "email",
      password: "password"
    };
  }

  async getById(id) {
    return db.query(
      `SELECT * FROM ${this.names.table} WHERE ${this.names.id} = ${id}`
    );
  }

  async getIdByUsername(username) {
    return db.query(
      `SELECT ${this.names.id} FROM ${this.names.table} WHERE ${this.names.username} = ${username}`
    );
  }

  async update(id) {
    const updates = "";
    return db.query(
      `UPDATE ${this.names.table} SET ${updates} WHERE ${this.names.id} = ${id}`
    );
  }
};
