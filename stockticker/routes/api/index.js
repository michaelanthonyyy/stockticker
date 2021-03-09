const router = require("express").Router();
const userRoutes = require("./users");
const stockRoutes = require("./stocks");
const commentRoutes = require("./comments");

router.use("/users", userRoutes);
router.use("/stocks", stockRoutes);
router.use("/comments", commentRoutes);

module.exports = router;