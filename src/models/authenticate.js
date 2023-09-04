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

  isValidateAuthToken(authToken) {
    return authToken in this.#userInfo;
  }

  deleteAuthToken(authToken) {
    const userInfo = Object.entries(this.#userInfo).filter(([token]) => token !== authToken);
    this.#userInfo = Object.fromEntries(userInfo);
  }

  getUserInfo(authToken) {
    const { username } = this.#userInfo[authToken];
    return username;
  }
}

module.exports = Authenticate;