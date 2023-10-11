var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "Name length should be  3 to 20 characters").isLength({
      min: 3,
      max: 20,
    }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 5 char").isLength({
      min: 5,
      max: 15,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 5 char").isLength({
      min: 5,
      max: 15,
    }),
  ],
  signin
);

router.get("/signout", signout);


module.exports = router;
