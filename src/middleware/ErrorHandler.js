const Boom = require("boom");

module.exports = async function handleErrors(ctx, next) {
  try {
    await next();
  } catch (err) {
    if (Boom.isBoom(err)) {
      return err.output.payload;
    }

    ctx.status = 500;
    ctx.body = err.message || "Internal Server Error";
    ctx.app.emit("error", err, ctx);

    return;
  }
};
