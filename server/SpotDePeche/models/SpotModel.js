const mongoose = require("mongoose");

const SpotSchema = mongoose.Schema(
    {
      nom: {
        type: String,
        required: [true, "S'il vous plaît entrez le nom du spot"],
      },
      description: {
        type: String,
        required: [true, "S'il vous plaît entrez la description du spot"],
      },
      region: {
        type: String,
        required: [true, "S'il vous plaît entrez la region du spot"],
      },
      ville: {
        type: String,
        required: [true, "S'il vous plaît entrez la ville du spot"],
      },
      longitude: { 
        type: String,
        required: [true, "S'il vous plaît entrez la longitude du spot"],
      },
      latitude: {
        type: String, 
        required: [true, "S'il vous plaît entrez la latitude du spot"],
      },
      image: {
        type: String,
        // required: [true, "S'il vous plaît entrez le lien de l'image du spot"],
       
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model("Spot", SpotSchema);