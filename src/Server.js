const bodyParser = require("koa-bodyparser");
const Boom = require("boom");
const helmet = require("koa-helmet");
const Koa = require("koa");
const log = require("koa-log");
const Router = require("koa-router");

const db = require("./Database");
const ErrorHandler = require("./middleware/ErrorHandler");
const ApiRouter = require("./routes/ApiRouter");
const CommentRouter = require("./routes/CommentRouter");
const CompetitionRouter = require("./routes/CompetitionRouter");
const EditRouter = require("./routes/EditRouter");
const RuleRouter = require("./routes/RuleRouter");
const StoryRouter = require("./routes/StoryRouter");
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
    this.app.use(ErrorHandler);
  }

  routes() {
    console.debug("Opening routes");
    const router = new Router();
    router.get("/", async _ctx => {
      throw Boom.badRequest("Path does not exists");
    });

    this.app.use(router.routes());
    this.app.use(ApiRouter.routes());
    this.app.use(CommentRouter.routes());
    this.app.use(CompetitionRouter.routes());
    this.app.use(EditRouter.routes());
    this.app.use(RuleRouter.routes());
    this.app.use(StoryRouter.routes());
    this.app.use(UserRouter.routes());
  }
}

module.exports = new Server();
module.exports.Server = Server;
