const { readFile } = require("node:fs");

const createNotesElement = (notesDetails) => {
  return notesDetails.map(({ username, message }) => {
    return `<div class="note">
    <div class="message"><p>${message}</p></div>
    <h2 class="name">~ ${username}</h2>
    </div>`;
  }).join("\n");
};

const serveHomepage = (request, response) => {
  const { board, auth } = request.app.context;
  const authToken = request.cookie["auth-token"];
  const username = auth.getUserInfo(authToken);
  const notesDetails = board.getNotes();
  const notesElement = createNotesElement(notesDetails);

  readFile("./public/index.html", "utf-8", (err, template) => {
    const homePageHtml = template.replace("--notes", notesElement);
    response.send(homePageHtml);
  });
};

module.exports = { serveHomepage };