const { it, describe } = require("node:test");
const { deepStrictEqual } = require("assert");
const Board = require("../../src/models/board");

describe("board", () => {
  it("should add a note on board", () => {
    const board = new Board();
    const notes = [
      {
        username: "bittu",
        message: "thank you all"
      }
    ];

    board.addNote("bittu", "thank you all");
    deepStrictEqual(notes, board.getNotes());
  });

});