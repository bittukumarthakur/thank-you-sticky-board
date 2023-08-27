const { createApp } = require("./src/app/create-app");
const { authUser } = require("./src/middleware/auth-user");
const { parseCookie } = require("./src/middleware/parseCookie");
const Authenticate = require("./src/models/authenticate");
const PORT = 8000;

const main = () => {
  const auth = new Authenticate();
  const app = createApp(auth, authUser, parseCookie);
  app.listen(PORT, () => console.log("Listening port:", PORT));
};

main();