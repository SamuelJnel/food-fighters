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
  try {
    const currentRestaurant = await Restaurant.findById(req.params.id);

    try {
      const updatedRest = await Restaurant.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedRest);
    } catch (err) {
      res.status(401).json(err);
    }
  } catch (err) {
    res.status(401).json(err);
  }
}
