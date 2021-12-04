const Order = require("../models/order");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = { index, deleteOrder };

async function index(req, res) {
  let token = req.headers.authorization;

  console.log(req.headers.authorization);
  var decoded = jwt.decode(token);
  var decoded = jwt.decode(token, { complete: true });
  console.log(decoded.payload.user._id);
  const currentUserId = decoded.payload.user._id;

  Order.find({ userId: currentUserId })
    .populate("userId")
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
}

// function index(req, res) {
//   let token = req.headers.authorization;

//   console.log(req.headers.authorization);
//   var decoded = jwt.decode(token);
//   var decoded = jwt.decode(token, { complete: true });
//   console.log(decoded.payload.user._id);
//   const userId = decoded.payload.user._id;

//   Order.find({}, function (err, orders) {
//     res.json(orders);
//   });
// }

async function deleteOrder(req, res) {
  console.log(req.params.id);
  await Order.findByIdAndDelete(req.params.id);
  res.json("deleted!");
}
