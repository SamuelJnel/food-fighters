const Order = require("../models/order");

module.exports = { index, deleteOrder };

function index(req, res) {
  Order.find({}, function (err, orders) {
    res.json(orders);
  });
}

async function deleteOrder(req, res) {
  await Order.findByIdAndDelete(req.params.id);
  res.json("deleted!");
}
