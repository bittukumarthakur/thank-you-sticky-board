const authUser = (request, response, next) => {
  const { auth } = request.app.context;
  const authToken = request.cookie["auth-token"];

  if (!auth.isValidateAuthToken(authToken)) {
    response.redirect("/login");
    response.send();
    return;
  }

  next();
};

module.exports = { authUser };