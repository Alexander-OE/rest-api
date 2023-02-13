const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/storeDB")
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log("An error has occured ", err));

const dataSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String,
    },

    age: {
        require: true,
        type: Number
    }
    });

module.exports = mongoose.model("Data", dataSchema)