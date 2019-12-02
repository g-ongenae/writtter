const Boom = require("boom");
const { promises } = require("fs");

const Config = require("./src/Config");
const server = require("./src/Server");

server
  .start(Config.PORT)
  .then(async () => {
    console.info("Server launched");
    const content = await promises.readFile("./init.sql", "utf-8");
    const contents = content.split(";");
    for (const c of contents) {
      const res = await server.db.query(`${c};`);
      console.log(res);
    }
    await server.db.query(
      "INSERT INTO users VALUES ('guillaume', '2019-12-1', 'guillaume.ongenae@gmail.com', 'example');"
    );
  })
  .catch(err => {
    server.close();
    console.error("Server crashed", err);
    throw Boom.boomify(err);
  });
