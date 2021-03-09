const router = require("express").Router();
const { get } = require("mongoose");
const commentsController = require("../../controller/commentsController");

router.route("/")
    .post(commentsController.create);

router.route("/:id")
    .get(commentsController.findById);

module.exports = router;