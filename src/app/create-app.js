const express = require("express");
const { logger } = require("../middleware/logger");
const { login } = require("../handlers/login");
const { serveLoginPage } = require("../handlers/serve-login-page");
const { serveHomepage } = require("../handlers/serve-home-page");
const { logout } = require("../handlers/logout");
const { authUser } = require("../middleware/auth-user");
const { parseCookie } = require("../middleware/parseCookie");

const Board = require("../models/board");


const postNote = (request, response) => {
  const { board, auth } = request.app.context;
  const { message } = request.body;

  const authToken = request.cookie["auth-token"];
  const userName = auth.getUserInfo(authToken);

  board.addNote(userName, message);
  response.redirect("/");
};

const createApp = (auth) => {
  const app = express();
  const board = new Board();
  app.context = { auth, board };

  app.use(logger);
  app.use(parseCookie);
  app.use(express.urlencoded());

  app.get("/login", serveLoginPage);
  app.post("/login", login);
  app.get("/logout", logout);
  app.get("/", authUser, serveHomepage);
  app.post("/", authUser, postNote);

  app.use(express.static("public"));
  return app;
};

module.exports = { createApp };