const router = require ("express").Router()

const stepsController = require ("../controllers/stepsController")


router
  .route("/routesSteps")
  .post((req, res) => stepsController.create(req, res));


module.exports = router