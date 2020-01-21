const bodyParser = require("koa-bodyparser");
const Boom = require("boom");
const cors = require("koa-cors");
const helmet = require("koa-helmet");
const Koa = require("koa");
const log = require("koa-log");
const Router = require("koa-router");

// Handler & Middleware
const db = require("./Database");
const AuthHandler = require("./middleware/AuthHandler");
const ErrorHandler = require("./middleware/ErrorHandler");

// Router
const ApiRouter = require("./routes/ApiRouter");
const CommentRouter = require("./routes/CommentRouter");
const CompetitionRouter = require("./routes/CompetitionRouter");
const EditRouter = require("./routes/EditRouter");
const RuleRouter = require("./routes/RuleRouter");
const StoryRouter = require("./routes/StoryRouter");
const UserRouter = require("./routes/UserRouter");

/**
 * The Server of the application
 */
class Server {
  constructor() {
    this.app = new Koa();
    this.db = db;

    this.middleware();
    this.routes();
  }

  /**
   * Get the Koa app instance
   * @returns {Koa} the Koa app instance
   */
  getApp() {
    return this.app;
  }

  /**
   * Get the database handler
   * @returns {Database} the database handler to make SQL request
   */
  getDatabase() {
    return this.db;
  }

  /**
   * Get the server instance
   * @returns {http.Server} the server instance
   */
  getServer() {
    return this.server;
  }

  /**
   * Close the server
   */
  close() {
    if (this.server) {
      this.server = this.server.close();
    }

    this.db.close();
  }

  /**
   * Start the server
   * @param {number} port the port to listen to
   */
  async start(port) {
    await this.db.connect();
    this.server = this.app.listen(port, () => {
      console.info(`Server listening on port ${port}`);
    });
  }

  /**
   * Add all middleware
   */
  middleware() {
    this.app.use(log());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(bodyParser());
    this.app.use(ErrorHandler);
    this.app.use(AuthHandler);
  }

  /**
   * Add all routes of the file
   */
  routes() {
    console.debug("Opening routes");
    this.notFoundRoutes();
    this.app.use(ApiRouter.routes());
    this.app.use(CommentRouter.routes());
    this.app.use(CompetitionRouter.routes());
    this.app.use(EditRouter.routes());
    this.app.use(RuleRouter.routes());
    this.app.use(StoryRouter.routes());
    this.app.use(UserRouter.routes());
  }

  /**
   * Catch request on / and respond 401
   */
  notFoundRoutes() {
    const router = new Router();
    router.get("/", async _ctx => {
      throw Boom.badRequest("Path does not exists");
    });

    this.app.use(router.routes());
  }
}

module.exports = new Server();
module.exports.Server = Server;
