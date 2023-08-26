const { it, describe } = require("node:test");
const { strictEqual } = require("assert");
const { createApp } = require("../../src/models/create-app");
const request = require("supertest");

describe("app", () => {

  describe("GET /", () => {
    it("should serve home page", (_, done) => {
      const app = createApp();

      request(app)
        .get("/")
        .expect("content-type", /text\/html/)
        .expect(200)
        .end(done);
    });

  });


});