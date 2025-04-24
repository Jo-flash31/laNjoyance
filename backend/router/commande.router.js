// routes/commandeRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controller/commande.controller");

router.get("/", controller.getAllCommandes);
router.get("/:id", controller.getCommandeById);
router.post("/", controller.createCommande);
router.put("/:id", controller.updateCommande);
router.delete("/:id", controller.deleteCommande);

module.exports = router;
