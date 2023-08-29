/* eslint-disable max-lines-per-function */
const sendNote = (textArea) => {
  const body = `message=${textArea.value}`;
  const option = {
    method: "POST",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  };

  fetch("/notes", option).then((response) => {
    window.location.assign(response.url);
  });
};

const addNote = () => {
  const notesContainer = document.querySelector("#notes");
  const textArea = document.createElement("textarea");
  textArea.classList.add("note");
  textArea.setAttribute("maxlength", 75);
  notesContainer.append(textArea);
  textArea.focus();

  textArea.onkeyup = (event) => {
    if (event.key === "Enter") sendNote(textArea);
  };
};

const main = () => {
  const addNoteButton = document.querySelector("#addNoteButton");
  addNoteButton.onclick = addNote;
};

window.onload = main;