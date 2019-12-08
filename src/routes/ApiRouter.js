const { promises } = require("fs");
const Router = require("koa-router");

module.exports = class ApiRouter {
  constructor(prefix = "/api") {
    this.router = new Router({ prefix });
    this.routes();
  }

  routes() {
    this.router.get("/", this._getApi);
  }

  async _getApi(ctx) {
    const OpenAPI = await promises.readFile("../../openapi.yaml", "utf-8");

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = OpenAPI;

    return;
  }
};
