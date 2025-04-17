const Patisserie = require('../models/patisserie.model');
const createError = require('../middlewares/error');


// Ajoute  d'une pâtisserie
const addPatisserie = async (req, res) => {
  try {
    const newPatisserie = await Patisserie.create(req.body);
    res.status(201).json({
      message: "Super nouvelle Pâtisserie ajoutée avec succès !",
      newPatisserie
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout", error: error.message });
  }
};

//   Toutes les pâtisseries
const getAllPatisseries = async (req, res) => {
  try {
    const patisseries = await Patisserie.find();
    res.status(200).json(patisseries);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération", error: error.message });
  }
};

// Pâtisserie par ID
const getPatisserie = async (req, res, next) => {
  try {
    const patisserie = await Patisserie.findById(req.params.id);
    if (!patisserie) return next(createError(404, "Pâtisserie non trouvée !"));
    res.status(200).json(patisserie);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// Modifier une pâtisserie
const updatePatisserie = async (req, res, next) => {
  try {
    const patisserie = await Patisserie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patisserie) return next(createError(404, "Pâtisserie non trouvée !"));
    res.status(200).json(patisserie);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour", error: error.message });
  }
};

// Supprimer une pâtisserie
const deletePatisserie = async (req, res, next) => {
  try {
    const deleted = await Patisserie.findByIdAndDelete(req.params.id);
    if (!deleted) return next(createError(404, "Pâtisserie non trouvée !"));
    res.status(200).json({ message: "Bravos Pâtisserie supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Probléme  lors de la suppression", error: error.message });
  }
};

module.exports = {
  addPatisserie,
  getAllPatisseries,
  getPatisserie,
  updatePatisserie,
  deletePatisserie
};
