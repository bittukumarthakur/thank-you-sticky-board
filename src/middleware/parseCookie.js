const parseCookie = (request, responses, next) => {
  const rawCookie = request.header("cookie");

  if (!rawCookie) {
    request.cookie = {};
    next();
    return;
  };

  const cookie = Object.fromEntries(rawCookie.split("&").map((cookie) => cookie.split("=")));
  request.cookie = cookie;
  next();
};

module.exports = { parseCookie };