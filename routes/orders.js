const express = require("express");
const router = express.Router();
const ordersControllers = require("../controllers/orders");

router.get("/", ordersControllers.index);
router.delete("/:id/delete", ordersControllers.deleteOrder);

// function checkAuth(req, res, next) {
//   if (req.user) return next();
//   return res.status(401).json({ msg: "Not Authorized" });
// }

module.exports = router;
