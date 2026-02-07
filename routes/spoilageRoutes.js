const express = require("express");
const router = express.Router();

const { predictSpoilage } = require("../controllers/spoilageController");

router.post("/predict-spoilage", predictSpoilage);

module.exports = router;
