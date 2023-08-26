const { createApp } = require("./src/models/create-app");
const PORT = 8000;

const main = () => {
  const app = createApp();
  app.listen(PORT, () => console.log("Listening port:", PORT));
};

main();