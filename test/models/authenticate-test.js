/* eslint-disable max-lines-per-function */
const { it, describe } = require("node:test");
const { strictEqual, ok } = require("assert");
const Authenticate = require("../../src/models/authenticate");

describe("auth", () => {
  it("should create a new auth token", () => {
    const auth = new Authenticate();
    strictEqual(auth.createAuthToken("bittu", "pass123"), "bittu-pass123");
  });

  it("should validate auth token", () => {
    const auth = new Authenticate();
    const authToken = auth.createAuthToken("bittu", "pass123");

    ok(auth.isValidateAuthToken(authToken));
    ok(!auth.isValidateAuthToken("bittu"));
  });

  it("should give the user info", () => {
    const auth = new Authenticate();
    const authToken = auth.createAuthToken("bittu", "pass123");

    strictEqual(auth.getUserInfo(authToken), "bittu");
  });
});