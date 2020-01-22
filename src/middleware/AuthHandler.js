const jwt = require("jsonwebtoken");
const Config = require("../Config");

/**
 * Authentication middleware
 * @param {KoaContext} ctx the context of the request
 * @param {KoaMiddleware} next the next middleware to execute
 *
 * @note an access token should be present in the headers under `x-access-token` or `authorization`
 */
module.exports = async function validateAuth(ctx, next) {
  // Get the token from the header if present
  const token =
    ctx.request.headers["x-access-token"] ||
    ctx.request.headers["authorization"];

  // Pass to the next step anyway
  if (!token) {
    console.info("No token provided.");

    return next();
  }

  try {
    // If can verify the token, set req.user and pass to next middleware
    ctx.request.user = jwt.verify(token, Config.PRIVATE_KEY);
    console.info("Token checked", { user: ctx.request.user });

    // Conserve the token in the response
    ctx.set("x-access-token", token);
    ctx.set("authorization", token);

    return next();
  } catch (err) {
    // The token is not valid
    console.error("Invalid Token Error");

    ctx.status = 400;
    ctx.body = "Access denied. Invalid token.";

    return;
  }
};
