// const { default: Restaurants } = require("./src/pages/Restaurants/Restaurants");

require("dotenv").config();
require("./config/database");

const Restaurant = require("./models/restaurant");

const restaurants = [
  {
    name: "Sushi Bar",

    address: "100 Queens Park, Toronto, ON M5S 2C6",

    pickUpTime: "6:00pm - 7:00pm",

    NumOfBags: 0,

    price: 4.7,

    hasSupply: "false",

    image: "https://i.imgur.com/KBsSsnI.jpg",
  },

  {
    name: "Pizza Place",

    address: "317 Dundas St W, Toronto, ON M5T 1G4",

    pickUpTime: "9:00pm - 10:00pm",

    NumOfBags: 7,

    price: 3.5,

    hasSupply: "true",

    image: "https://i.imgur.com/PghqJtd.jpg",
  },

  {
    name: "Bread Heads",

    address: "301 Front St W, Toronto, ON M5V 2T6",

    pickUpTime: "2:00pm - 2:30pm",

    NumOfBags: 10,

    price: 2.5,

    hasSupply: "true",

    image: "https://i.imgur.com/q9u4xGc.jpg",
  },

  {
    name: "Just Desserts",

    address: "1 Austin Terrace, Toronto, ON M5R 1X8",

    pickUpTime: "5:00pm - 5:30pm",

    NumOfBags: 0,

    price: 3.0,

    hasSupply: "false",

    image: "https://i.imgur.com/zpBk4IK.jpg",
  },

  {
    name: "Local Grocery",

    address: "93 Front St E, Toronto, ON M5E 1C3",

    pickUpTime: "10:00pm - 10:15pm",

    NumOfBags: 9,

    price: 3.0,

    hasSupply: "true",

    image: "https://i.imgur.com/Ic65VSo.jpg",
  },

  {
    name: "Jitters",

    address: "1 Austin Terrace, Toronto, ON M5R 1X8",

    pickUpTime: "4:00pm - 4:30pm",

    NumOfBags: 2,

    price: 2.5,

    hasSupply: "true",

    image: "https://i.imgur.com/Mo0CPBE.jpg",
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
