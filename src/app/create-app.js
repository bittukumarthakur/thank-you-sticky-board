const express = require("express");
const { logger } = require("../middleware/logger");
const { login } = require("../handlers/login");
const { serveLoginPage } = require("../handlers/serve-login-page");

const serveHomepage = (request, response) => {
  const path = `${process.env.HOME}/public/index.html`;
  response.sendFile(path);
  response.send();
};

const createApp = (auth, authUser, parseCookie) => {
  const app = express();
  app.context = { auth };

  app.use(logger);
  app.use(parseCookie);
  app.use(express.urlencoded());

  app.get("/login", serveLoginPage);
  app.post("/login", login);
  app.get("/", authUser);

  app.use(express.static("public"));
  return app;
};

module.exports = { createApp };