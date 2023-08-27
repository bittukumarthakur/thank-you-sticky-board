const serveLoginPage = (request, response) => {
  const path = process.env.PWD;
  response.sendFile(`${path}/public/pages/login.html`);
};

module.exports = { serveLoginPage };