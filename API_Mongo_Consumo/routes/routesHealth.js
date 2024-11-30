const router = require ("express").Router()

const healthController = require("../controllers/healthController")

//Funções


router.route("/routesHealth").get((req,res)=> healthController.getAll(req,res))

router.route("/routesHealth/:id").get((req,res) => healthController.getId(req,res))

router.route("/routesHealth/spo2").get((req, res) => healthController.getSpo2(req, res));




module.exports=router;