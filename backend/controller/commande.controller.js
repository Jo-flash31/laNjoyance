const jwt = require("jsonwebtoken");
const ENV = require('../config/env');
const createError = require('../middlewares/error');
const Commande = require('../models/commande.model');

const CommandeModel = require('../models/commande.model');
const bcrypt = require('bcrypt');

const getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find().populate("Id_User");
    res.json(commandes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id).populate("Id_User");
    if (!commande) return res.status(404).json({ message: "Commande non trouvée" });
    res.json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createCommande = async (req, res) => {
  try {
    const commande = new Commande(req.body);
    const saved = await commande.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateCommande = async (req, res) => {
  try {
    const updated = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Commande non trouvée" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCommande = async (req, res) => {
  try {
    const deleted = await Commande.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Commande non trouvée" });
    res.json({ message: "Commande supprimée avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllCommandes,
  getCommandeById,
  createCommande,
  updateCommande,
  deleteCommande,
};