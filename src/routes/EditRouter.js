const Boom = require("boom");
const Router = require("koa-router");

const Edit = require("../models/Edit");

class EditRouter {
  constructor(prefix = "/edits") {
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
    this.router.get("/users/:id", this._getByOwnerId);
    this.router.get("/:id", this._get);
    this.router.get("/", this._search);
    this.router.patch("/:id", this._put);
    this.router.post("/", this._post);
    this.router.put("/:id", this._put);
  }

  async _post(ctx) {
    const edit = new Edit();
    await edit.save(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await edit.getId();

    return;
  }

  async _put(ctx) {
    const edit = new Edit(ctx.params.id);
    ctx.request.body.id = ctx.params.id;
    await edit.update(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await edit.getData();

    return;
  }

  async _get(ctx) {
    const edit = new Edit(ctx.params.id);

    try {
      const editData = await edit.getData();

      if (!editData) {
        throw Boom.notFound();
      }

      ctx.message = "OK — Edit found";
      ctx.status = 200;
      ctx.body = editData;

      return;
    } catch (error) {
      if (error.message == "No id") {
        throw Boom.badRequest();
      }

      throw error;
    }
  }

  async _delete(ctx) {
    const edit = new Edit(ctx.params.id);

    const editId = await edit.getId();
    await edit.remove();

    ctx.message = "OK — Edit deleted from database";
    ctx.status = 200;
    ctx.body = editId;

    return;
  }

  async _search(ctx) {
    const edit = new Edit();
    ctx.body = await edit.search(ctx.request.query);

    return;
  }

  async _getByOwnerId(ctx) {
    const edit = new Edit();
    ctx.body = await edit.getAllEditsOwnedByAUser(ctx.params.id);

    return;
  }
}

module.exports = new EditRouter();
module.exports.EditRouter = EditRouter;
