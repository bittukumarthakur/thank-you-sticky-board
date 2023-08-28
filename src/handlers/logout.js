const logout = (request, response) => {
  const { auth } = request.app.context;
  const authToken = request.cookie["auth-token"];
  auth.deleteAuthToken(authToken);

  response.cookie("auth-token", "", { maxAge: 0 });
  response.redirect("/");
  response.end();
};

module.exports = { logout };