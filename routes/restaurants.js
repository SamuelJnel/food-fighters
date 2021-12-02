const express = require("express");
const router = express.Router();
const restaurantsControllers = require("../controllers/restaurants");

router.get("/", restaurantsControllers.index);
router.put("/edit/:id", restaurantsControllers.edit);
router.post("/:id", restaurantsControllers.createOrder);

// function checkAuth(req, res, next) {
//   if (req.user) return next();
//   return res.status(401).json({ msg: "Not Authorized" });
// }

module.exports = router;
