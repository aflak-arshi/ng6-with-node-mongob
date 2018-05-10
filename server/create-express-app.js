const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  path = require("path");

const orders = require("./routes/orders");
const users = require("./routes/user");

const createExpressApp = database => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/orders", orders(database));

  app.use("/users", users(database));
  

  app.use("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "client/dist"));
  });

  return app;
};

module.exports = createExpressApp;
