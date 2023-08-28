const addNote = (event) => {
  const addNotePrompt = document.querySelector("#add-note-prompt");
  addNotePrompt.showModal();
  // const noteContainer = document.querySelector("#notes");
  // const textArea = document.createElement("textarea");
  // noteContainer.append(textArea);
  // textArea.onkeyup = (event) => {
  //   console.log(event.key);
  // };

};

const main = () => {
  const addNoteButton = document.querySelector("#addNoteButton");
  addNoteButton.onclick = addNote;
};

window.onload = main;