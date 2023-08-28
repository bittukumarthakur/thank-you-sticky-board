const postNote = (request, response) => {
  const { board, auth } = request.app.context;
  const { message } = request.body;

  const authToken = request.cookie["auth-token"];
  const userName = auth.getUserInfo(authToken);

  board.addNote(userName, message);
  response.redirect("/");
};

module.exports = { postNote };