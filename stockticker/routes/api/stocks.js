const router = require("express").Router();
const { get } = require("mongoose");
const stocksController = require("../../controller/stocksController");

// router.route("/")
//     .get(stocksController.findAll)
//     .post(stocksController.create);

// router
//     .route("/:id")
//     .get(stocksController.findById)
//     .put(stocksController.update)
//     .delete(stocksController.remove);

module.exports = router;