const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("name").isLength({ min: 1 }),
    check("email").isEmail(),
    check("password").isLength({ min: 6 })
  ],
  async (req, res) => {
    const { name, email, password } = await req.body;
    console.log(name, email, password);
    try {
      let user = await User.findOne({
        email: email
      });
      if (user) {
        res.status(400).json({ errors: [{ msg: "user already exists" }] });
      } else {
        user = new User({
          name,
          email,
          password
        });

        const salt = await bcrypt.genSaltSync(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

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
        res.json({ success });
      }
    } catch (err) {
      console.log("wtf");
      console.error(err.message);
    }
  }
);

module.exports = router;
