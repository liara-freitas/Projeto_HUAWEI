const { Step :stepsSchema } = require("../models/Steps");

const stepsController = {
  create: async (req, res) => {
    try {
      // Agora vamos tentar inserir dados para o modelo "Caminhada"
      const dadosSteps = {
        group: req.body.group,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        dataCollectorId: req.body.dataCollectorId,
        sampleSet: req.body.sampleSet,
        dataTypeName: req.body.dataTypeName,
        originalDataCollectorId: req.body.originalDataCollectorId,
        samplePoints: req.body.samplePoints,
        value: req.body.value,
      };

      // Criando dados de caminhada no banco
      const stepsResponse = await stepsSchema.create(dadosSteps);
      res.status(201).json({
        stepsResponse,
        msg: "Dados inseridos com suesso!",
      });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro ao inserir os dados", error: error.message });
    }
  },
};

module.exports = stepsController;
