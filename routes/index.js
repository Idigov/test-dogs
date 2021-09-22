const { Router } = require("express");
const { dogController } = require("../controllers/dogs.controller")

const router = Router();

router.get("/saveToMongo", dogController.getDogAPI );
router.get("/getDogs", dogController.getDogMongoDB );

module.exports = router;