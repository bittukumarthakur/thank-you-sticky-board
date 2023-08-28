const express = require("express");
const { logger } = require("../middleware/logger");
const { login } = require("../handlers/login");
const { serveLoginPage } = require("../handlers/serve-login-page");
const { serveHomepage } = require("../handlers/serve-home-page");
const { logout } = require("../handlers/logout");
const { authUser } = require("../middleware/auth-user");
const { parseCookie } = require("../middleware/parseCookie");
const { postNote } = require("../handlers/post-note");

const createApp = (auth, board) => {
  const app = express();
  app.context = { auth, board };

  app.use(logger);
  app.use(parseCookie);
  app.use(express.urlencoded());

  app.get("/login", serveLoginPage);
  app.post("/login", login);
  app.get("/logout", logout);
  app.get("/", authUser, serveHomepage);
  app.post("/notes", authUser, postNote);

  app.use(express.static("public"));
  return app;
};

module.exports = { createApp };