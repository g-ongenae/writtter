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

  async init() {
    return db.query(`CREATE TABLE ${this.names.table} (
            ${this.names.id} INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            ${this.names.username} VARCHAR(50) NOT NULL,
            ${this.names.score} INT DEFAULT 0,
            ${this.names.joined} DATETIME DEFAULT NOW(),
            ${this.names.email} VARCHAR(50) NOT NULL,
            ${this.names.password} VARCHAR(50) NOT NULL,
            UNIQUE KEY(${this.names.username}, ${this.names.email})
        );`);
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

  async update() {}
};
