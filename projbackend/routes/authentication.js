var express = require("express");
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {
    signout,
    signup,
    signin,
    isSignedIn
} = require("../controllers/authentication");

router.post(
    "/signup",
    [
        check("name", "name should be at least 3 char").isLength({ min: 3 }),
        check("email", "email is required").isEmail(),
        check("password", "Password should be at least 8 char").not().isIn([123, 'password', 'god']).isLength({ min: 8 }).matches(/\d/).withMessage("must contain a number")
        ],
    signup
);

router.post("/signin",
    [
        // check("email", "Email is required").isEmail(),
        check("password", "Password is required").isLength({ min: 1 })
    ], 
    signin
);

router.get("/signout", signout);

module.exports = router;
