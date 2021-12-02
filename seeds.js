// const { default: Restaurants } = require("./src/pages/Restaurants/Restaurants");

require("dotenv").config();
require("./config/database");

const Restaurant = require("./models/restaurant");

const restaurants = [
  {
    name: "Sushi bar",

    address: "123 Abc Street",

    pickUpTime: "6:00pm - 7:00pm",

    NumOfBags: 5,

    price: 4.7,

    hasSupply: "false",
  },

  {
    name: "Pizza Place",

    address: "436 Cbd street",

    pickUpTime: "9:00pm - 10:00pm",

    NumOfBags: 7,

    price: 3.5,

    hasSupply: "true",
  },
];

Restaurant.deleteMany({})
  .then((results) => {
    return Restaurant.create(restaurants);
  })
  .then((res) => {
    console.log(res.length);
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });
