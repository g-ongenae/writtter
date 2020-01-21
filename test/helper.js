const { promises } = require("fs");

const Config = require("../src/Config");
const server = require("../src/Server");

before(async function() {
  await server.start(Config.PORT);

  const queries = (await promises.readFile("./init.sql", "utf-8")).split(";");
  queries.pop(); // Remove last element (empty)

  for (const q of queries) {
    await server.db.query(`${q};`);
  }

  this.server = server.getServer();
  this.db = server.getDatabase();

  console.info("Server launched");
});

after(function() {
  server.close();
});
