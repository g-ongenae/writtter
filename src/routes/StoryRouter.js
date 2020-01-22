const Boom = require("boom");
const Router = require("koa-router");

const Story = require("../models/Story");

class StoryRouter {
  constructor(prefix = "/stories") {
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
    const story = new Story();
    await story.save(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = story.getId();
  }

  async _put(ctx) {
    const story = new Story(ctx.params.id);
    ctx.request.body.id = ctx.params.id;
    await story.update(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await story.getData();
  }

  async _get(ctx) {
    const story = new Story(ctx.params.id);

    try {
      const storyData = await story.getData();

      if (!storyData) {
        throw Boom.notFound();
      }

      ctx.message = "OK — Story found";
      ctx.status = 200;
      ctx.body = storyData;
    } catch (error) {
      if (error.message == "No id") {
        throw Boom.badRequest();
      }

      throw error;
    }
  }

  async _delete(ctx) {
    const story = new Story(ctx.params.id);

    const storyId = story.getId();
    await story.remove();

    ctx.message = "OK — Story deleted from database";
    ctx.status = 200;
    ctx.body = storyId;
  }

  async _search(ctx) {
    const story = new Story();
    ctx.body = await story.search(ctx.request.query);
  }

  async _getByOwnerId(ctx) {
    const story = new Story();
    ctx.body = await story.getAllStoriesByOwner(ctx.params.id);
  }
}

module.exports = new StoryRouter();
module.exports.StoryRouter = StoryRouter;
