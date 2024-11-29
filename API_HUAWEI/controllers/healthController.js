
const { Health: healthRecordsSchema } = require("../models/Health");

const healthController = {
  create: async (req, res) => {
    try {
      // Dados para o modelo de saúde
      const dadosHealth = {
        healthRecords: req.body.healthRecords,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        dataTypeName: req.body.dataTypeName,
        valor: req.body.valor,
        id: req.body.id,
        subDataRelation: req.body.subDataRelation,
      };

      // Criando dados de saúde no banco
      const healthResponse = await healthRecordsSchema.create(dadosHealth);

      // Resposta combinada para ambas as operações
      res.status(201).json({
        healthResponse,
        msg: "Dados inseridos com sucesso!",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Erro ao inserir os dados", error: error.message });
    }
  },

}

  

module.exports = healthController;
