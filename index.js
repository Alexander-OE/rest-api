const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
require("dotenv").config();

mongoose
  .connect("mongodb://127.0.0.1:27017/storeDB")
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log("An error has occured ", err));

const app = express();

app.use(express.json());
app.use("/api", routes);

const dataSchema = new mongoose.Schema({
  name: {
    require: true,
    type: string,
  },

  age: {
    require: true,
    type: Number
  }
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});


module.exports = mongoose.model("Data", dataSchema)