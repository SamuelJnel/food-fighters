const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./config/database");
const cookieSession = require("cookie-session");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(
  cookieSession({
    name: "foodfighters",
    keys: ["key1", "key2"],
  })
);

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
app.use(
  cors({
    origin: "*",
  })
);

//app.use(require("./config/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/restaurants", require("./routes/restaurants"));
app.use("/api/orders", require("./routes/orders"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
