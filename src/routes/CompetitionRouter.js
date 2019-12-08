const Boom = require("boom");
const Router = require("koa-router");

const Competition = require("../models/Competition");

class CompetitionRouter {
  constructor(prefix = "/competitions") {
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
    this.router.get("/users/:id", this._getByCreatorId);
  }

  async _post(ctx) {
    const competition = new Competition();
    await competition.save(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = competition.getId();
  }

  async _put(ctx) {
    const competition = new Competition(ctx.params.id);
    ctx.request.body.id = ctx.params.id;
    await competition.update(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await competition.getData();
  }

  async _get(ctx) {
    const competition = new Competition(ctx.params.id);

    try {
      const competitionData = await competition.getData();

      if (!competitionData) {
        throw Boom.notFound();
      }

      ctx.message = "OK — Competition found";
      ctx.status = 200;
      ctx.body = competitionData;
    } catch (error) {
      if (error.message == "No id") {
        throw Boom.badRequest();
      }

      throw error;
    }
  }

  async _delete(ctx) {
    const competition = new Competition(ctx.params.id);

    const competitionId = competition.getId();
    await competition.remove();

    ctx.message = "OK — Competition deleted from database";
    ctx.status = 200;
    ctx.body = competitionId;
  }

  async _search(ctx) {
    const competition = new Competition();
    ctx.body = await competition.search(ctx.request.query);
  }

  async _getByCreatorId(ctx) {
    const competition = new Competition();
    ctx.body = await competition.getAllCompetitionsByCreator(ctx.params.id);
  }
}

module.exports = new CompetitionRouter();
module.exports.CompetitionRouter = CompetitionRouter;
