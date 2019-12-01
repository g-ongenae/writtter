const bodyParser = require("koa-bodyparser");
const Boom = require("boom");
const helmet = require("koa-helmet");
const Koa = require("koa");
const log = require("koa-log");
const Router = require("koa-router");

class Server {
  constructor() {
    this.app = new Koa();

    this.middleware();
    this.routes();
  }

  getApp() {
    return this.app;
  }
  getServer() {
    return this.server;
  }

  close() {
    if (this.server) {
      this.server = this.server.close();
    }
  }

  start(port = 8080) {
    this.server = this.app.listen(port, () => {
      console.info(`Server listening on port ${port}`);
    });
  }

  middleware() {
    this.app.use(log());
    this.app.use(helmet());
    this.app.use(bodyParser());
  }

  routes() {
    console.debug("Open routes");
    const router = new Router();
    router.get("/", async _ctx => {
      throw Boom.badRequest("Path does not exists");
    });

    this.app.use(router.routes());
  }
}

module.exports = new Server();
module.exports.Server = Server;
