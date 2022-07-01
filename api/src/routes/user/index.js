const { Router } = require("express");
const passport = require("passport");
const genPassword = require("../../lib/passwordUtils").genPassword;
const { User } = require("../../db");
const isAuth = require("./authMiddleware").isAuth;
const isAdmin = require("./authMiddleware").isAdmin;

const router = Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.status(401).send({ msg: "User doesn't exists" });
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully authenticated");
      });
    }
  })(req, res, next);
});

router.post("/register", async (req, res, next) => {
  const saltHash = genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const emailUser = await User.findOne({ where: { username: req.body.email } });
  if (emailUser !== null) res.send({ message: "User already exists" });

  const newUser = await User.create({
    username: req.body.email,
    hash: hash,
    salt: salt,
  });
  await newUser.save();
  res.send({ msg: "User registered successfully" });
});

router.get("/user", async (req, res, next) => {
  //const [results] = await conn.query("SELECT * FROM session LIMIT 1");
  //console.log(results[0].sess.passport);
  res.send(req.user.dataValues.username);
});

router.get("/logout", (req, res, next) => {
  req.logout((r) => console.log(r));
  res.send({ message: "User logged out" });
});

router.get("/protected-route", isAuth, (req, res, next) => {
  res.send("You made it to the route.");
});

router.get("/admin-route", isAdmin, (req, res, next) => {
  res.send("You made it to the admin route.");
});

module.exports = router;
