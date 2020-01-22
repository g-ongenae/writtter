const Boom = require("boom");
const Router = require("koa-router");

const Comment = require("../models/Comment");

class CommentRouter {
  constructor(prefix = "/comments") {
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
    this.router.get("/stories/:id", this._getByStoryId);
    this.router.get("/users/:id", this._getByOwnerId);
    this.router.get("/:id", this._get);
    this.router.get("/", this._search);
    this.router.patch("/:id", this._put);
    this.router.post("/", this._post);
    this.router.put("/:id", this._put);
  }

  async _post(ctx) {
    const comment = new Comment();
    await comment.save(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = comment.getId();
  }

  async _put(ctx) {
    const comment = new Comment(ctx.params.id);
    ctx.request.body.id = ctx.params.id;
    await comment.update(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await comment.getData();
  }

  async _get(ctx) {
    const comment = new Comment(ctx.params.id);

    try {
      const commentData = await comment.getData();

      if (!commentData) {
        throw Boom.notFound();
      }

      ctx.message = "OK — Comment found";
      ctx.status = 200;
      ctx.body = commentData;
    } catch (error) {
      if (error.message == "No id") {
        throw Boom.badRequest();
      }

      throw error;
    }
  }

  async _delete(ctx) {
    const comment = new Comment(ctx.params.id);

    const commentId = comment.getId();
    await comment.remove();

    ctx.message = "OK — Comment deleted from database";
    ctx.status = 200;
    ctx.body = commentId;
  }

  async _search(ctx) {
    const comment = new Comment();
    ctx.body = await comment.search(ctx.request.query);
  }

  async _getByOwnerId(ctx) {
    const comment = new Comment();
    ctx.body = await comment.getAllCommentsOwnedByAUser(ctx.params.id);
  }

  async _getByStoryId(ctx) {
    const comment = new Comment();
    ctx.body = await comment.getAllCommentsRelatedToAStory(ctx.params.id);
  }
}

module.exports = new CommentRouter();
module.exports.CommentRouter = CommentRouter;
