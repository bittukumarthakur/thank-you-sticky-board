const parseCookie = (request, responses, next) => {
  const rawCookie = request.header("cookie") || "";
  const cookie = Object.fromEntries(rawCookie.split("&").map((cookie) => cookie.split("=")));
  request.cookie = cookie;
  next();
};

module.exports = { parseCookie };