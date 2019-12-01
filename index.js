const Boom = require("boom");

const server = require("./src/Server");

server
  .start()
  .then(() => {
    console.info("Server launched");
  })
  .catch(err => {
    server.close();
    console.error("Server crashed", err);
    throw Boom.boomify(err);
  });
