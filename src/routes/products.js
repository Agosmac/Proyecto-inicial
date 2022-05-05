const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();

router.get("/products", productsController.edit);

router.get("/products/mas", productsController.mostrar);
router.post("/products/mas", productsController.create);

module.exports = router;