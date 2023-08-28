/* eslint-disable max-lines-per-function */
const { it, describe } = require("node:test");
const request = require("supertest");
const { createApp } = require("../../src/app/create-app");
const Authenticate = require("../../src/models/authenticate");
const { authUser } = require("../../src/middleware/auth-user");
const { parseCookie } = require("../../src/middleware/parseCookie");

describe("app", () => {

  describe("GET /login", () => {
    it("should serve the login page", (_, done) => {
      const auth = new Authenticate();
      const app = createApp(auth, authUser, parseCookie);

      request(app)
        .get("/login")
        .expect("content-type", /text\/html/)
        .expect(200)
        .end(done);
    });
  });

  describe("POST /login", () => {
    it("should post the login details, redirect to home-page", (_, done) => {
      const auth = new Authenticate();
      const app = createApp(auth, authUser, parseCookie);

      request(app)
        .post("/login")
        .type("application/x-www-form-urlencoded")
        .send("username=bittu&password=123")
        .expect(302)
        .expect("content-type", /text\/plain/)
        .expect("set-cookie", "auth-token=bittu-123; Path=/")
        .expect("location", "/")
        .end(done);
    });
  });

  describe("GET /", () => {
    it("should serve home page to logged_in user", (_, done) => {
      const auth = new Authenticate();
      const app = createApp(auth, authUser, parseCookie);

      request(app)
        .post("/login")
        .type("application/x-www-form-urlencoded")
        .send("username=bittu&password=123")
        .expect("set-cookie", "auth-token=bittu-123; Path=/")
        .end(() => {
          request(app)
            .get("/")
            .set("Cookie", "auth-token=bittu-123")
            .expect(200)
            .expect("content-type", /text\/html/)
            .end(done);
        });
    });
  });


});