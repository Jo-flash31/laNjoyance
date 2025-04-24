// const require Auth = require('../middleware/verifyToken');
const express = require('express');
const router = express.Router();
const data = require('../models/recette.model');
const recette = require('../models/recette.model');
const data = require('../models/recette.model');

router.get('/all', async (req, res) => {
    try {
        const  recettes = data;
        res.status(200).json(recettes);
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json(error.message);
    }
    })