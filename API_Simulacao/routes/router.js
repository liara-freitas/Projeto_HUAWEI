const router = require("express").Router();

//Rotas de serviço

const recordsController = require("../controllers/healthRecordsController");

const recordsRouter =require("./routesRecord")

router.use("/", recordsRouter);

module.exports = router;
