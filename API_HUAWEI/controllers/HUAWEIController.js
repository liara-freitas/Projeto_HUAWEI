const { Health: healthRecordsSchema } = require("../models/Health");
const axios = require("axios");


const HUAWEIController = {
  getHealthRecords:  (req, res) => {
    const authorization = req.get("Authorization");
    const clientId = req.get("x-client-id");
    const version = req.get("x-version");
    const callerTraceId = req.get("x-caller-trace-id");

    if (!authorization || !clientId || !version || !callerTraceId) {
      return res.status(400).json({ error: "Cabeçalhos ausentes" });
    }

  },
  
};

module.exports = HUAWEIController;
