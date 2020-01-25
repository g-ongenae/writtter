const _ = require("lodash");
const Boom = require("boom");
const Router = require("koa-router");

const User = require("../models/User");

class UserRouter {
  constructor(prefix = "/users") {
    this.router = new Router({ prefix });
    this._routes();
  }

  routes() {
    if (!this.router) {
      throw new Error("Router not started");
    }

    return this.router.routes();
  }

  _routes() {
    this.router.delete("/:id", this._delete);
    this.router.get("/login", this._login);
    this.router.get("/logout", this._logout);
    this.router.get("/auth", this._getByAuthToken);
    this.router.get("/:id", this._get);
    this.router.get("/", this._search);
    this.router.patch("/:id", this._put);
    this.router.post("/", this._post);
    this.router.put("/:id", this._put);
  }

  async _post(ctx) {
    const user = new User();
    await user.save(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = {
      message: "User saved successfully",
      user: await user.getSafeData()
    };

    return;
  }

  async _put(ctx) {
    const user = new User(ctx.params.id);
    ctx.request.body.id = ctx.params.id;
    await user.update(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await user.getData();

    return;
  }

  async _get(ctx) {
    const user = new User(ctx.params.id);

    try {
      const userData = await user.getSafeData();

      if (!userData) {
        throw Boom.notFound();
      }

      ctx.message = "OK — User found";
      ctx.status = 200;
      ctx.body = userData;

      return;
    } catch (error) {
      if (error.message == "No id") {
        throw Boom.badRequest();
      }

      throw error;
    }
  }

  async _getByAuthToken(ctx) {
    const userId = _.get(ctx, "request.user.data.id");
    const user = new User(userId);
    const userData = await user.getSafeData();

    if (!userData) {
      throw Boom.notFound();
    }

    ctx.message = "OK — User found";
    ctx.status = 200;
    ctx.body = userData;

    return;
  }

  async _delete(ctx) {
    const user = new User(ctx.params.id);

    const userId = user.getId();
    await user.remove();

    ctx.message = "OK — User delete from database";
    ctx.status = 200;
    ctx.body = { userId };

    return;
  }

  async _search(ctx) {
    const user = new User();
    ctx.body = await user.search(ctx.request.query);

    return;
  }

  async _login(ctx) {
    const user = new User();
    if (await user.checkPassword(_.get(ctx, "request.header"))) {
      const token = user.generateAuthToken();

      ctx.message = "OK";
      ctx.status = 200;
      ctx.set("authorization", token);
      ctx.set("x-access-token", token);
      ctx.body = await user.getSafeData();

      return;
    } else {
      console.log("Error invalid password");

      throw Boom.badRequest("Invalid Password");
    }
  }

  async _logout(ctx) {
    console.debug(
      "User logged out",
      ctx.request.params,
      ctx.request.query,
      ctx.request.body
    );
  }
}

module.exports = new UserRouter();
module.exports.UserRouter = UserRouter;
