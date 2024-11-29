const axios = require("axios");

const HUAWEIController = {
  getHealthRecords: (req, res) => {
    const authorization = req.get("Authorization");
    const clientId = req.get("x-client-id");
    const version = req.get("x-version");
    const callerTraceId = req.get("x-caller-trace-id");

    if (!authorization || !clientId || !version || !callerTraceId) {
      return res.status(400).json({ error: "Cabeçalhos ausentes" });
    }

    const responseBody = {
      healthRecords: [
        {
          startTime: 1609293600000000000,
          endTime: 1609380000000000000,
          dataTypeName: "com.huawei.continuous.ecg_record",
          value: [
            { fieldName: "ecg_type", integerValue: 1 },
            { fieldName: "avg_heart_rate", floatValue: 75.0 },
          ],
          id: "some_id_value",
          subDataRelation: [
            {
              startTime: 1609293600000000000,
              endTime: 1609380000000000000,
              dataTypeName: "com.huawei.continuous.ecg_detail",
              dataCollectorId: "some_collector_id",
            },
          ],
        },
      ],
    };

    res.status(200).json(responseBody);
  },
};

module.exports = HUAWEIController;
