const express = require("express");
const router = express.Router();
const {addSpot, getSpots, getSpotById, updateSpot, deleteSpot} = require("../controllers/SpotController");

router.route("/addSpot").post(addSpot);
router.route("/getSpots").get(getSpots);
router.route("/getSpotById/:id").get(getSpotById);
router.route("/updateSpot/:id").put(updateSpot);
router.route("/deleteSpot/:id").delete(deleteSpot);

module.exports = router;

