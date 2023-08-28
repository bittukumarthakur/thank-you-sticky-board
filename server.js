const { createApp } = require("./src/app/create-app");
const { parseCookie } = require("./src/middleware/parseCookie");
const Authenticate = require("./src/models/authenticate");
const PORT = 8000;

const main = () => {
  const auth = new Authenticate();
  const app = createApp(auth);
  app.listen(PORT, () => console.log("Listening port:", PORT));
};

main();