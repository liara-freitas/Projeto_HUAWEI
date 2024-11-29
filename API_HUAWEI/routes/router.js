const router = require("express").Router();

const stepsController = require("../controllers/stepsController");

//Rotas de serviço de saúde




//Rotas de serviço de caminhada

const stepsRouter = require ("./routesSteps")

router.use("/", stepsRouter);

const HUAWEIRouter = require("./routerHuawei")

router.use("/", HUAWEIRouter);

module.exports = router;
