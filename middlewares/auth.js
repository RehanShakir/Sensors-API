const jwt = require("jsonwebtoken");

const auth = (res, req, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res.send("Access Denied");
    }
    const verifyToken = jwt.verify(token, process.env.JWTSECRETKEY);
    req.user = verifyToken;
    console.log("tokenVerifed");
    next();
  } catch (err) {
    console.log("error in jwt" + err);
  }
};

module.exports = auth;
