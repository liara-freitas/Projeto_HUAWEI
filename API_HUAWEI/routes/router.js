const router = require("express").Router();

const healthController = require("../controllers/healthController");
const stepsController = require("../controllers/stepsController");

//Rotas de serviço de saúde


const healthRouter = require("./routesHealth");

router.use("/", healthRouter);

//Rotas de serviço de caminhada

const stepsRouter = require ("./routesSteps")

router.use("/", stepsRouter);

const HUAWEIRouter = require("./routerHuawei")

router.use("/", HUAWEIRouter);

module.exports = router;
