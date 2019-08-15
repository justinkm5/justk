const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// express urlencoded middleware
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(bodyParser.json());

// load up webpack bundle entry point
app.use("/build", express.static(__dirname + "/build"));
app.use("/", express.static(__dirname + "/public"));

// node api routes
app.use("/api/register", require("./routes/api/register.js"));
app.use("/api/login", require("./routes/api/login.js"));
app.use("api/listing", require("./routes/api/listing.js"));
app.use("api/cart", require("./routes/api/cart.js"));

// connect to mongoose
mongoose
  .connect("mongodb://localhost:27017/login_backpack_db", {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB has connected..."))
  .catch(err => console.log(err));

// node server listen on port 8080
const server = app.listen(8080, () => {
  console.log(
    `Server listening on http://${server.address().address}:${
      server.address().port
    }`
  );
});
