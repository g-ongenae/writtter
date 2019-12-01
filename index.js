const Boom = require("boom");

const Config = require("./src/Config");
const server = require("./src/Server");

server
  .start(Config.PORT)
  .then(() => {
    console.info("Server launched");
  })
  .catch(err => {
    server.close();
    console.error("Server crashed", err);
    throw Boom.boomify(err);
  });
