const Product = require('../models/product.model');
const createError = require('../middlewares/error');

// Ajoute d'un produit
const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      message: "Super nouveau produit ajouté avec succès !",
      newProduct
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout", error: error.message });
  }
};

// Tous les produits
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération", error: error.message });
  }
};

// Produit par ID
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return next(createError(404, "Produit non trouvé !"));
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// Modifier un produit
const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return next(createError(404, "Produit non trouvé !"));
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour", error: error.message });
  }
};

// Supprimer un produit
const deleteProduct = async (req, res, next) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return next(createError(404, "Produit non trouvé !"));
    res.status(200).json({ message: "Bravos produit supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Probléme lors de la suppression", error: error.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
};
