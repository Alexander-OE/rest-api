const express = require("express");

const routes = require("./routes/routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
