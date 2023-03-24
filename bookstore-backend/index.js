const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bookRoutes = require("./routes/Book.routes");
const categoryRoutes = require("./routes/Category.routes");
const userRoutes = require("./routes/User.routes");
var cors = require("cors");
const { json } = express;

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));

app.use(json());

var corsOptions = {
  origin: "http://localhost:3335",
};

app.use("/book", cors(corsOptions), bookRoutes);
app.use("/category", cors(corsOptions), categoryRoutes);
app.use("/user", cors(corsOptions), userRoutes);

// connect to mongo database
mongoose
  .connect(process.env.mongo_url)
  .then((result) =>
    app.listen(process.env.port, () => {
      console.log(
        `Server is running on : http://localhost:${process.env.port}`
      );
    })
  )
  .catch((error) => {
    console.log(error);
  });
