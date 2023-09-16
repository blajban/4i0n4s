const express = require('express');
const router = express.Router();

const relay = require("../models/relay.js");

router.post('/', (req, res) => relay.pingSensorDemo(req, res));

module.exports = router;
