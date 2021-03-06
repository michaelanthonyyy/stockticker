const router = require("express").Router();
const { get } = require("mongoose");
const stocksController = require("../../controller/stocksController");

router
    .route("/daily/:ticker")
    .get(stocksController.findDaily);

router
    .route("/weekly/:ticker")
    .get(stocksController.findWeekly);

router
    .route("/monthly/:ticker")
    .get(stocksController.findMonthly);

router
    .route("/yearly/:ticker")
    .get(stocksController.findYearly);

module.exports = router;