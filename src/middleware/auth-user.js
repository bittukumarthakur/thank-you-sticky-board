const authUser = (request, response, next) => {
  const authToken = request.cookie["auth-token"] ;

  if (!authToken) {
    response.redirect("/login");
    response.send();
    return;
  }

  next();
};

module.exports = { authUser };