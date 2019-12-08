const _ = require("lodash");
const { promises } = require("fs");
const Router = require("koa-router");
const YAML = require("js-yaml");

class ApiRouter {
  constructor(prefix = "/api") {
    this.router = new Router({ prefix });
    this.routes();
  }

  routes() {
    console.debug("Started OpenAPI Router");
    this.router.get("/", this._getApi);
  }

  async _getApi(ctx) {
    console.debug("Get OpenAPI file");
    const OpenAPI = await promises.readFile("./openapi.yaml", "utf-8");

    ctx.message = "OK";
    ctx.status = 200;
    ctx.body = _.isNil(ctx.request.query["json"])
      ? OpenAPI
      : YAML.load(OpenAPI);

    return;
  }
}

module.exports = new ApiRouter();
module.exports.ApiRouter = ApiRouter;
