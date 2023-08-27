const login = (request, response) => {
  const { username, password } = request.body;
  const { auth } = request.app.context;
  const authToken = auth.createAuthToken(username, password);
  response.cookie("auth-token", authToken);
  response.redirect("/");
  response.send();
};

module.exports = { login };