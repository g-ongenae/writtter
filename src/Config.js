const config = require("config");

/**
 * Configs of the App
 */
class Config {
  constructor() {
    this.HOST = this.get("DB_HOST", "localhost");
    this.USERNAME = this.get("DB_USERNAME", "root");
    this.PASSWORD = this.get("PASSWORD");
    this.DATABASE = this.get("DATABASE", "writtter");
    this.PORT = this.get("PORT", 8080);
    this.PRIVATE_KEY = this.get("PRIVATE_KEY");
  }

  /**
   * Get a config (securely)
   * @private
   * @param {string} name name of the config to retrieve
   * @param {string|number} defaultValue the default value (fallback)
   */
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
