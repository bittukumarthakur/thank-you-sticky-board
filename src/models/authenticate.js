class Authenticate {
  #userInfo;
  constructor() {
    this.#userInfo = {};
  }

  createAuthToken(username, password) {
    const authToken = `${username}-${password}`;
    this.#userInfo[authToken] = { username, password };
    return authToken;
  }

  validateAuthToken(authToken) {
    return authToken in this.#userInfo;
  }

  getUserInfo(authToken) {
    const { username } = this.#userInfo[authToken];
    return username;
  }
}

module.exports = Authenticate;