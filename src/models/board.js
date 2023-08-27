class Board {
  #stickyNotes;

  constructor() {
    this.#stickyNotes = [];
  }

  addNote(username, message) {
    const note = { username, message };
    this.#stickyNotes.push(note);
  }

  getNotes() {
    return [...this.#stickyNotes];
  }
}

module.exports = Board;