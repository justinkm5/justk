const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");

router.post(
  "/",
  [check("email").isEmail(), check("password").exists()],
  async (req, res) => {
    const { email, password } = req.body;

    try {
      // check for user in database
      let user = await User.findOne({ email: email });
      let passwordCheck = await bcrypt.compare(password, user.password);

      if (!user) {
        console.log("error finding username");
        return res.redirect("/login");
      }

      if (!passwordCheck) {
        console.log("password is wrong");
        return res.redirect("/login");
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      console.log("login success");
      res.send({ success: "success" });
    } catch (err) {
      console.error(err.message);
    }
  }
);

module.exports = router;
