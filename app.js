const express = require("express");
const app = express();
const port = 3000;

const dataSource = require("./connect").dataSource; //connection to database

const userRoute = require("./routes/user.route");
const userProductRoute = require("./routes/user.products.route");
const productRoute = require("./routes/product.route");

app.use(express.json());

// app.use("/", express.static("files"));
app.use("/api/users", userRoute);
app.use("/api/user-products", userProductRoute);
app.use("/api/products", productRoute);

//
app.listen(port, () => {
  //connection to web server
  console.log("Web Server is up");
});
