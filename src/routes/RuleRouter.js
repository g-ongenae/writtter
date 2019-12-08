const Boom = require("boom");
const Router = require("koa-router");

const Rule = require("../models/Rule");

class RuleRouter {
  constructor(prefix = "/rules") {
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
    this.router.get("/users/:id", this._getByOwnerId);
  }

  async _post(ctx) {
    const rule = new Rule();
    await rule.save(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = rule.getId();
  }

  async _put(ctx) {
    const rule = new Rule(ctx.params.id);
    ctx.request.body.id = ctx.params.id;
    await rule.update(ctx.request.body);

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = await rule.getData();
  }

  async _get(ctx) {
    const rule = new Rule(ctx.params.id);

    try {
      const ruleData = await rule.getData();

      if (!ruleData) {
        throw Boom.notFound();
      }

      ctx.message = "OK — Rule found";
      ctx.status = 200;
      ctx.body = ruleData;
    } catch (error) {
      if (error.message == "No id") {
        throw Boom.badRequest();
      }

      throw error;
    }
  }

  async _delete(ctx) {
    const rule = new Rule(ctx.params.id);

    const ruleId = rule.getId();
    await rule.remove();

    ctx.message = "OK — Rule deleted from database";
    ctx.status = 200;
    ctx.body = ruleId;
  }

  async _search(ctx) {
    const rule = new Rule();
    ctx.body = await rule.search(ctx.request.query);
  }

  async _getByOwnerId(ctx) {
    const rule = new Rule();
    ctx.body = await rule.getAllRulesOwnedByAUser(ctx.params.id);
  }
}

module.exports = new RuleRouter();
module.exports.RuleRouter = RuleRouter;
