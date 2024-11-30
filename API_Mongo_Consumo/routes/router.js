const router = require ("express").Router()

//Rotas de serviço

const servicesRouter = require("./routesHealth")

router.use("/", servicesRouter)

module.exports = router;
