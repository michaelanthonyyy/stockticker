const router = require("express").Router();
const userRoutes = require("./users");
const stockRoutes = require("./stocks");

router.use("/users", userRoutes);
router.use("/stocks", stockRoutes);

module.exports = router;