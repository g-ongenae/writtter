const _ = require("lodash");
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
    this.router.get("/all", this._getAll);
    this.router.get("/:id", this._get);
    this.router.get("/", this._search);
    this.router.patch("/:id", this._put);
    this.router.post("/", this._post);
    this.router.put("/:id", this._put);
  }

  async _post(ctx) {
    const story = new Story();
    await story.save(ctx.request.body, ctx.request.user.data);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await story.getData();

    return;
  }

  async _put(ctx) {
    const story = new Story(ctx.params.id);
    ctx.request.body.id = ctx.params.id;
    await story.update(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await story.getData();

    return;
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

      return;
    } catch (error) {
      if (error.message == "No id") {
        throw Boom.badRequest();
      }

      throw error;
    }
  }

  async _getAll(ctx) {
    const story = new Story();
    let stories = await story.getAllStories();

    const ownerId = _.get(ctx, "request.user.data.id");
    if (!_.isNil(ownerId)) {
      const userStories = await story.getAllStoriesByOwner(ownerId);
      stories = _.concat(stories, userStories);
    }

    ctx.body = stories;
    ctx.status = 200;
    ctx.message = "OK";

    return;
  }

  async _delete(ctx) {
    const story = new Story(ctx.params.id);

    const storyId = story.getId();
    await story.remove();

    ctx.message = "OK — Story deleted from database";
    ctx.status = 200;
    ctx.body = { storyId };

    return;
  }

  async _search(ctx) {
    const story = new Story();
    ctx.body = await story.search(ctx.request.query);

    return;
  }

  async _getByOwnerId(ctx) {
    const story = new Story();
    ctx.body = await story.getAllStoriesByOwner(ctx.params.id);

    return;
  }
}

module.exports = new StoryRouter();
module.exports.StoryRouter = StoryRouter;
