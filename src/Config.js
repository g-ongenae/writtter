const config = require("config");

class Config {
  constructor() {
    this.HOST = this.get("DB_HOST", "localhost");
    this.USERNAME = this.get("DB_USERNAME", "root");
    this.PASSWORD = this.get("PASSWORD");
    this.DATABASE = this.get("DATABASE", "writtter");
  }

  get(name, defaultValue) {
    if (process.env[name]) {
      return process.env[name];
    } else if (config.has(name)) {
      return config.get(name);
    } else {
      return defaultValue;
    }
  }
}

module.exports = new Config();
