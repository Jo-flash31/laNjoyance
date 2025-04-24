const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
  Date_de_creation: {
    type: Date,
    default: Date.now,
  },
  Date_Dexpedition: {
    type: Date,
    required: false ,
  },
  nameClient: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    enum: ["En attente", "En cours de traitement ", "Expédiée", "Livrée", "Annulée"],
    default: "En attente",
  },
  expedition: {
    type: String,
  },
  Avis_Commande: {
    default: "Pas encore d'avis",
    type: String,
  },
  Id_User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
  },
}, { timestamps: true });

module.exports = mongoose.model("Commande", commandeSchema);
