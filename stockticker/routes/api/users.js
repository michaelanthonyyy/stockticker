const router = require("express").Router();
const { get } = require("mongoose");
const userController = require("../../controller/userController");

router.route("/")
    .get(userController.findAll)
    .post(userController.add);

router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

module.exports = router;