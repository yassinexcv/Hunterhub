const express = require("express");
const router = express.Router();
const {addSpot, getSpots, getSpotById, updateSpot, deleteSpot} = require("../controllers/SpotController");

const multer = require('multer');


// multer configuration
const storage = multer.diskStorage({
 
     

    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // define the destination folder for uploaded files

    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop()) // generate unique file name
        const fileName =  file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop();// generate unique file name

        const filePath = fileName.replace(/\\/g, ""); // enlever le backslash dans le nom de fichier

        cb(null, filePath);
    }

});

const upload = multer({ storage: storage }).single('file');

router.route("/add").post( upload ,  addSpot);
router.route("/getSpots").get(getSpots);
router.route("/getSpotById/:id").get(getSpotById);
router.route("/updateSpot/:id").put(updateSpot);
router.route("/deleteSpot/:id").delete(deleteSpot);

module.exports = router;

