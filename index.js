const Boom = require("boom");
// const { promises } = require("fs");

const Config = require("./src/Config");
const server = require("./src/Server");

server
  .start(Config.PORT)
  .then(async () => {
    /* Skipped
    // Init database
    const queries = (await promises.readFile("./init.sql", "utf-8")).split(";");
    queries.pop(); // Remove last element (empty)

    for (const q of queries) {
      await server.db.query(`${q};`);
    }
    */

    console.info("Server launched");
  })
  .catch(err => {
    server.close();
    console.error("Server crashed", err);
    throw Boom.boomify(err);
  });
