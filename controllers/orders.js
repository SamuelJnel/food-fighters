const Order = require("../models/order");

module.exports = { index, deleteOrder };

function index(req, res) {
  Order.find({}, function (err, orders) {
    res.json(orders);
  });
}

function deleteOrder(req, res) {
  Order.findByIdAndDelete(req.params.id, function (err) {
    console.log(req.params.id);
    res.json("deleted!");
  });
}
