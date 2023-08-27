const { it, describe } = require("node:test");
const request = require("supertest");
const { createApp } = require("../../src/app/create-app");

describe("app", () => {

  describe("GET /", () => {
    it.skip("should serve home page", (_, done) => {
      const app = createApp();

      request(app)
        .get("/")
        .expect("content-type", /text\/html/)
        .expect(200)
        .end(done);
    });

  });
});