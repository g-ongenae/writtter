const Boom = require("boom");
// const bcrypt = require("bcrypt");
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
    this.router.post("/", this._post);
    this.router.get("/:id", this._get);
    this.router.delete("/:id", this._delete);
    this.router.put("/:id", this._put);
    this.router.patch("/:id", this._put);
    this.router.get("/", this._search);
    this.router.get("/login", this._login);
    this.router.get("/logout", this._logout);
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

  async _search(ctx) {
    const user = new User();
    ctx.body = await user.search(ctx.request.query);
  }

  async _login(ctx) {
    console.info("Login in");
    const user = new User();
    const data = await user.findByUsername(ctx.req.header.username);

    if (data.password === ctx.req.header.password) {
      const token = user.generateAuthToken();
      console.log(token);
    } else {
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
