
const { Health: HealthModel } = require("../models/health"
);


const healthController = {
  getAll: async (req, res) => {
    try {
      const dados = await HealthModel.find();
      res.json(dados);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar dados." });
    }
  },

  getId: async (req, res) => {
    try {
      const id = req.params.id; // Captura o id da URL
      // Encontre o registro pelo id
      const healthRecord = await HealthModel.findById(id);

      if (!healthRecord) {
        return res.status(404).json({ message: "Registro não encontrado" });
      }

      // Filtra os valores para encontrar o ecg_type e seu integerValue
      const ecgType = healthRecord.healthRecords
        .flatMap((record) => record.value) // Acessa todos os objetos no array 'value'
        .filter((item) => item.fieldName === "ecg_type") // Filtra para encontrar 'ecg_type'
        .map((item) => item.integerValue); // Mapeia para obter o 'integerValue'

      // Retorna os valores de ecg_type
      res.json({ ecgType });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          message: "Erro ao processar a solicitação.",
          details: error.message,
        });
    }
  },
};


/*const healthController = {
  getAll: async (req, res) => {
    try {
      const dados = await HealthModel.find();
      res.json(dados);
    } catch (error) {
      console.log(error);
    }
  },

  getId: async (req, res) => {
    try {
      const id = req.params.id;
      const id_user = await HealthModel.findById(_id);

      res.json(id_user);
    } catch (error) {
      console.log(error);
    }
  },

  getSpo2: async (req, res) => {
    try {
      const spo2 = req.params.spo2;
      const spo2_user = await HealthModel.find({}, { spo2: 1, _id: 0 });
      res.json(spo2_user);
    } catch (error) {
      console.log(error);
    }
  },
  getCalorias: async (req, res) => {
    try {
      const calorias = req.params.calorias;
      const calorias_user = await HealthModel.find({}, { calorias: 1, _id: 0 });
      res.json(calorias_user);
    } catch (error) {
      console.log(error);
    }
  },
  getDistancia: async (req, res) => {
    try {
      const distancia = req.params.distancia;
      const distancia_user = await HealthModel.find(
        {},
        { distancia: 1, _id: 0 }
      );
      res.json(distancia_user);
    } catch (error) {
      console.log(error);
    }
  },
  getFC: async (req, res) => {
    try {
      const fc = req.params.frequencia_cardiaca;
      const fc_user = await HealthModel.find(
        {},
        { frequencia_cardiaca: 1, _id: 0 }
      );
      res.json(fc_user);
    } catch (error) {
      console.log(error);
    }
  },
  getPassos: async (req, res) => {
    try {
      const passos = req.params.passos;
      const passos_user = await HealthModel.find(
        {},

        { passos: 1, _id: 0 }
      );
      res.json(passos_user);
    } catch (error) {
      console.log(error);
    }
  },
  getCalorisaAtivas: async (req, res) => {
    try {
      const caloriasAtivas = req.params.caloriasAtivas;
      const caloriasAtivas_user = await HealthModel.find(
        {},

        { calorias_ativas: 1, _id: 0 }
      );
      res.json(caloriasAtivas_user);
    } catch (error) {
      console.log(error);
    }
  },

  getIntensidadeAtividade: async (req, res) => {
    try {
      const intensidadeAtividade = req.params.intensidadeAtividade;
      const intensidadeAtividade_user = await HealthModel.find(
        {},

        { intensidade_atividade: 1, _id: 0 }
      );
      res.json(intensidadeAtividade_user);
    } catch (error) {
      console.log(error);
    }
  },

  getMetaPassos: async (req, res) => {
    try {
      const metaPassos = req.params.metaPassos;
      const metaPassos_user = await HealthModel.find(
        {},

        { meta_de_passos: 1, _id: 0 }
      );
      res.json(metaPassos_user);
    } catch (error) {
      console.log(error);
    }
  },
  getMetaGastoCalorico: async (req, res) => {
    try {
      const metaGastoCalorico = req.params.metaGastoCalorico;
      const metaGastoCalorico_user = await HealthModel.find(
        {},

        { meta_gasto_calorico: 1, _id: 0 }
      );
      res.json(metaGastoCalorico_user);
    } catch (error) {
      console.log(error);
    }
  },

  getMetaHorasAtivas: async (req, res) => {
    try {
      const metaHorasAtivas = req.params.metaHorasAtivas;
      const metaHorasAtivas_user = await HealthModel.find(
        {},

        { meta_horas_ativas: 1, _id: 0 }
      );
      res.json(metaHorasAtivas_user);
    } catch (error) {
      console.log(error);
    }
  },
  getMetaTempoExercicio: async (req, res) => {
    try {
      const metaTempoExercicio = req.params.metaTempoExercicio;
      const metaTempoExercicio_user = await HealthModel.find(
        {},

        { meta_tempo_exercicio: 1, _id: 0 }
      );
      res.json(metaTempoExercicio_user);
    } catch (error) {
      console.log(error);
    }
  },
  getTempoExercicio: async (req, res) => {
    try {
      const tempoExercicio = req.params.tempoExercicio;
      const tempoExercicio_user = await HealthModel.find(
        {},

        { tempo_exercicio: 1, _id: 0 }
      );
      res.json(tempoExercicio_user);
    } catch (error) {
      console.log(error);
    }
  },

  getPontuacaoEstresse: async (req, res) => {
    try {
      const pontuacaoEstresse = req.params.pontuacaoEstresse;
      const pontuacaoEstresse_user = await HealthModel.find(
        {},

        { pontuacao_estresse: 1, _id: 0 }
      );
      res.json(pontuacaoEstresse_user);
    } catch (error) {
      console.log(error);
    }
  },

  getEstadoSono: async (req, res) => {
    try {
      const estadoSono = req.params.estadoSono;
      const estadoSono_user = await HealthModel.find(
        {},

        { estado_do_sono: 1, _id: 0 }
      );
      res.json(estadoSono_user);
    } catch (error) {
      console.log(error);
    }
  },
};
*/
module.exports = healthController;
