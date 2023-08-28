const { createApp } = require("./src/app/create-app");
const { parseCookie } = require("./src/middleware/parseCookie");
const Authenticate = require("./src/models/authenticate");
const Board = require("./src/models/board");
const PORT = 8000;

const main = () => {
  const auth = new Authenticate();
  const board = new Board();

  const app = createApp(auth, board);
  app.listen(PORT, () => console.log("Listening port:", PORT));
};

main();