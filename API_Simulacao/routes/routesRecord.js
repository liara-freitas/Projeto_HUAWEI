const router = require("express").Router();

const healthController = require("../controllers/healthRecordsController");

router.get(
  "/healthkit/v2/dataCollectors/healthRecords",
  healthController.getHealthRecords
);

module.exports = router;


