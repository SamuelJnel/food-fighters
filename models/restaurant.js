const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String },

  address: { type: String },

  pickUpTime: { type: String },

  NumOfBags: { type: Number },

  price: { type: Number },

  hasSupply: { type: String },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
