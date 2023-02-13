const express = require("express");
const Model = require("../model/model");
const router = express.Router();

// post method
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });
//   res.send("POST API");

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

// get all method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

// get by ID method
router.get("/getAll/:id", (req, res) => {
  res.send("Get by ID API");
});

// Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

// Delete by ID
router.delete("/delete/:id", () => {
  res.send("Delete by ID API");
});

router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
