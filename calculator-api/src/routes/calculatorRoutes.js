// This file defines the routes for the calculator API using Express.js.

const express = require('express');
const CalculatorController = require('../controllers/calculatorController');

const router = express.Router();
const calculatorController = new CalculatorController();

router.post('/add', calculatorController.add);
router.post('/subtract', calculatorController.subtract);
router.post('/multiply', calculatorController.multiply);
router.post('/divide', calculatorController.divide);

module.exports = router;