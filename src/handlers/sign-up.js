const signUp = (request, response) => {
  const { users } = request.app.context;
  const { username, password } = request.body;
  
  console.log(username, password);
  response.end();
};

module.exports = { signUp };