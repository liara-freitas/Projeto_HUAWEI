const router = require ("express").Router()

const healthController = require("../controllers/healthController")

//Funções


router.route("/routesHealth").get((req,res)=> healthController.getAll(req,res))

router.route("/routesHealth/:id").get((req,res) => healthController.getId(req,res))

router.route("/routesHealth/spo2").get((req, res) => healthController.getSpo2(req, res));

router.route("/routesHealth/calorias").get((req, res) => healthController.getCalorias(req, res));

router.route("/routesHealth/distancia").get((req, res) => healthController.getDistancia(req, res));

router.route("/routesHealth/fc").get((req, res) => healthController.getFC(req, res));

router.route("/routesHealth/passos").get((req, res) => healthController.getPassos(req, res));

router.route("/routesHealth/caloriasAtivas").get((req, res) => healthController.getCalorisaAtivas(req, res));

router.route("/routesHealth/intensidadeAtividade").get((req, res) => healthController.getIntensidadeAtividade(req, res));

router.route("/routesHealth/metaPassos").get((req, res) => healthController.getMetaPassos(req, res));

router.route("/routesHealth/metaGastoCalorico").get((req, res) => healthController.getMetaGastoCalorico(req, res));

router.route("/routesHealth/metaHorasAtivas").get((req, res) => healthController.getMetaHorasAtivas(req, res));

router.route("/routesHealth/metaTempoExercicio").get((req, res) => healthController.getMetaTempoExercicio(req, res));

router.route("/routesHealth/tempoExercicio").get((req, res) => healthController.getTempoExercicio(req, res));

router.route("/routesHealth/estadoSono").get((req, res) => healthController.getEstadoSono(req, res));

router
  .route("/routesHealth/pontuacaoEstresse").get((req, res) => healthController.getPontuacaoEstresse(req, res));


module.exports=router;