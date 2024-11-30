const router = require("express").Router();


//Rotas de serviço de saúde


const HUAWEIRouter = require("./routerHuawei")

router.use("/", HUAWEIRouter);

module.exports = router;
