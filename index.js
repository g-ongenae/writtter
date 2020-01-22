const Boom = require("boom");
const { promises } = require("fs");

const Config = require("./src/Config");
const server = require("./src/Server");

///
/// START
///

server
  .start(Config.PORT)
  .then(async () => {
    // Init only for test or manually
    if (process.env.NODE_ENV !== "production") {
      await initDB();
    }

    console.info("Server launched");
  })
  .catch(err => {
    server.close();
    console.error("Server crashed", err);
    throw Boom.boomify(err);
  });

/**
 * Init the Database tables
 */
async function initDB() {
  // Init database
  const queries = (await promises.readFile("./init.sql", "utf-8")).split(";");
  queries.pop(); // Remove last element (empty)

  for (const q of queries) {
    await server.db.query(`${q};`);
  }

  console.log("Database ready");
}
