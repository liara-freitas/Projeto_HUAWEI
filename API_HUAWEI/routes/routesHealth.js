const router = require("express").Router();

const healthController = require("../controllers/healthController");


router.route("/routesHealth").post((req,res)=>healthController.create(req,res))

router
  .route("/routesHealth")
  .post((req, res) => healthController.createHuawei(req, res));

module.exports = router