const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = require("../controllers/user");

const users = database => {
  const router = express.Router();

  router.post("/signup", userController.user_signup);

  router.post("/login", userController.user_login);

  router.delete("/:userId", userController.user_delete);

  return router;
};

module.exports = users;
