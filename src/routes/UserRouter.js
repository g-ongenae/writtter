const Boom = require("boom");
const Router = require("koa-router");

const User = require("../models/User");

class UserRouter {
  constructor(prefix = "/users") {
    this.router = new Router({ prefix });
    this.routes();
  }

  routes() {
    this.router.post("/", this._post);
    this.router.get("/:id", this._get);
    this.router.delete("/:id", this._delete);
    this.router.put("/:id", this._put);
    this.router.patch("/:id", this._put);
    this.router.get("/", this.search);
  }

  async _post(ctx) {
    const user = new User();
    await user.save(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = user.getId();
  }

  async _put(ctx) {
    const user = new User(ctx.params.id);
    await user.update(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await user.getData();
  }

  async _get(ctx) {
    const user = new User(ctx.params.id);

    try {
      const userData = await user.getData();

      if (!userData) {
        throw Boom.notFound();
      }

      ctx.message = "OK — User found";
      ctx.status = 200;
      ctx.body = userData;
    } catch (error) {
      if (error.message == "No id") {
        throw Boom.badRequest();
      }

      throw error;
    }
  }

  async _delete(ctx) {
    const user = new User(ctx.params.id);

    const userId = user.getId();
    await user.remove();

    ctx.message = "OK — User delete from database";
    ctx.status = 200;
    ctx.body = userId;
  }

  async search(ctx) {
    const user = new User();
    ctx.body = await user.search(ctx.request.query);
  }
}

module.exports = new UserRouter();
module.exports.UserRouter = UserRouter;
