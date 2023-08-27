const addNote = (event) => {
  const addNotePrompt = document.querySelector("#add-note-prompt");
  addNotePrompt.showModal();
};

const main = () => {
  const addNoteButton = document.querySelector("#addNoteButton");
  addNoteButton.onclick = addNote;
};

window.onload = main;