const express = require('express');
const router = express.Router();

const climate = require("../models/climate.js");

router.get('/', (req, res) => climate.getReadings(req, res));

router.post('/', (req, res) => climate.addReading(req, res));

module.exports = router;
