const express = require("express");
const orderController = require("../controllers/order-controllers");

const orders = database => {
  const router = express.Router();

  router.post("/", orderController.addOrder);

  router.get("/", orderController.getOrders);

  router.get("/:id", orderController.getOrderById);

  router.put("/:id", orderController.editOrder);

  router.delete("/:id", orderController.deleteOrder);

  return router;
};

module.exports = orders;
