const Restaurant = require("../models/restaurant");
const Order = require("../models/order");

module.exports = { index, createOrder, edit };

function index(req, res) {
  Restaurant.find({}, function (err, restaurants) {
    // console.log(restaurants);
    res.json(restaurants);
  });
}

async function createOrder(req, res) {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.json(newOrder);
}

async function edit(req, res) {
  // const updateRest = await Restaurant.findByIdAndUpdate(
  //   req.params.id,
  //   req.body
  // );
  // await updateRest.save();
  // res.json(updateRest);
}
