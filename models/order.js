const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  quantity: { type: Number, min: 0, max: 8 },

  establishment: { type: String },

  pickUpTime: { type: String },

  pickUpDate: {
    type: Date,
    default: Date.now(),
  },

  conformationCode: { type: String },

  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],

  restaurantId: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
});

module.exports = mongoose.model("Order", orderSchema);
