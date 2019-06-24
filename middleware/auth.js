const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  // get token from header
  const token = req.headers["x-access-token"] || req.headers["authorization"];

  // remove bearer portion from token string if it's from authorizatoin
  if (token.startsrWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  // check if there is no token
  if (!token) {
    return res.status(401).json({ msg: "a token is required for access" });
  }

  // verify token with try catch try catch error handling
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.decoded = decoded;
    next(); // this next function lets app go to next middleware function
  } catch (err) {
    res.status(401).json({ msg: "invalid token" });
  }
};
