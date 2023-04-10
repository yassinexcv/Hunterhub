const Spot = require("../models/SpotModel");
const asyncHandler = require("express-async-handler");




// @desc    add a new spot
// @route   POST /api/spot/add
// // @access  Public

const addSpot = asyncHandler(async (req, res) => {
    const { nom, description, region, ville, longitude, latitude , image} = req.body;

    if (!req.file) {
        res.status(400);
        throw new Error("No file uploaded");
    }

    const {file} = req;
    const spot = await Spot.create({
    
        nom,
        description,
        region,
        ville,
        longitude,
        latitude,
        image: file.path || null,
    });
 
    if (spot) {
        res.status(201).json({
            _id: spot._id,
            nom: spot.nom,
            description: spot.description,
            region: spot.region,
            ville: spot.ville,
            longitude: spot.longitude,
            latitude: spot.latitude,
            image: spot.image,
        });
    } else {
        res.status(400);
        throw new Error("Invalid spot data");
    }
});






// @desc    Get all spots
// @route   GET /api/spot
// @access  Public
const getSpots = asyncHandler(async (req, res) => {
    const spots = await Spot.find({});
    res.json(spots);
    });

// @desc    Get spot by ID
// @route   GET /api/spot/:id
// @access  Public
const getSpotById = asyncHandler(async (req, res) => {
    const spot = await Spot.findById(req.params.id);
    if (spot) {
        res.json(spot);
    } else {
        res.status(404);
        throw new Error("Spot not found");
    }
    });

// @desc    Update a spot
// @route   PUT /api/spot/:id
// @access  Private
const updateSpot = asyncHandler(async (req, res) => {
    const spotId = req.params.id;
  
    const spot = await Spot.findById(spotId);
  
    if (spot) {
      spot.nom = req.body.nom || spot.nom;
      spot.description = req.body.description || spot.description;
      spot.region = req.body.region || spot.region;
      spot.ville = req.body.ville || spot.ville;
      spot.longitude = req.body.longitude || spot.longitude;
      spot.latitude = req.body.latitude || spot.latitude;
  
      if (req.file) {
        spot.image = req.file.path || null;
      }
  
      const updatedSpot = await spot.save();
  
      res.json({
        _id: updatedSpot._id,
        nom: updatedSpot.nom,
        description: updatedSpot.description,
        region: updatedSpot.region,
        ville: updatedSpot.ville,
        longitude: updatedSpot.longitude,
        latitude: updatedSpot.latitude,
        image: updatedSpot.image,
      });
    } else {
      res.status(404);
      throw new Error("Spot not found");
    }
  });
  


// @desc    Delete a spot
// @route   DELETE /api/spot/:id
// @access  Private
const deleteSpot = asyncHandler(async (req, res) => {
    const spot = await Spot.findById(req.params.id);
    if (spot) {
        await spot.remove();
        res.json({ message: "Spot removed" });
    } else {
        res.status(404);
        throw new Error("Spot not found");
    }
    });

module.exports = {
    addSpot,
    getSpots,
    getSpotById,
    updateSpot,
    deleteSpot,
    };