const bodyParser = require("koa-bodyparser");
const Boom = require("boom");
const helmet = require("koa-helmet");
const Koa = require("koa");
const log = require("koa-log");
const Router = require("koa-router");

const db = require("./Database");
const ApiRouter = require("./routes/ApiRouter");
const UserRouter = require("./routes/UserRouter");

class Server {
  constructor() {
    this.app = new Koa();
    this.db = db;

    this.middleware();
    this.routes();
  }

  getApp() {
    return this.app;
  }
  getDatabase() {
    return this.db;
  }
  getServer() {
    return this.server;
  }

  close() {
    if (this.server) {
      this.server = this.server.close();
    }

    this.db.close();
  }

  async start(port) {
    await this.db.connect();
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
    console.debug("Opening routes");
    const router = new Router();
    router.get("/", async ctx => {
      ctx.body = await this.db.query("SELECT * FROM users");
      // throw Boom.badRequest("Path does not exists");
    });

    this.app.use(router.routes());
    const openApi = new ApiRouter();
    this.app.use(openApi.router.routes());
    const user = new UserRouter();
    this.app.use(user.router.routes());
  }
}

module.exports = new Server();
module.exports.Server = Server;
