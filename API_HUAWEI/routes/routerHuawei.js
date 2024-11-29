const router = require("express").Router();
const axios = require("axios");
const HUAWEIController = require("../controllers/HUAWEIController");


// Definir a rota GET para o endpoint
router.get(
  "/healthkit/v2/dataCollectors/healthRecords",
  HUAWEIController.getHealthRecords
);

module.exports = router
