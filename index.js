const Boom = require("boom");
const { promises } = require("fs");

const Config = require("./src/Config");
const server = require("./src/Server");

server
  .start(Config.PORT)
  .then(async () => {
    console.info("Server launched");
    const content = await promises.readFile("./init.sql", "utf-8");
    const res = await server.db.query(content);
    console.log(res);
  })
  .catch(err => {
    server.close();
    console.error("Server crashed", err);
    throw Boom.boomify(err);
  });
