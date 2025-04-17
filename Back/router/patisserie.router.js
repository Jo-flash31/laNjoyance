const express = require('express');
const router = express.Router();
const patisserieController = require('../controller/patisserie.controller');
const { verifyAdmin, verifyToken } = require('../middlewares/auth');

router.post('/add', verifyToken, verifyAdmin, patisserieController.addPatisserie);

router.get('/', patisserieController.getAllPatisseries);

router.get('/:id', patisserieController.getPatisserie);

router.put('/:id',verifyToken, verifyAdmin, patisserieController.updatePatisserie);

router.delete('/:id', verifyToken, verifyAdmin, patisserieController.deletePatisserie);

module.exports = router;
