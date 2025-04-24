const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');
const { verifyAdmin, verifyToken } = require('../middlewares/auth');

router.post('/add', verifyToken, verifyAdmin, productController.addProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);
router.put('/:id', verifyToken, verifyAdmin, productController.updateProduct);
router.delete('/:id', verifyToken, verifyAdmin, productController.deleteProduct);

module.exports = router;