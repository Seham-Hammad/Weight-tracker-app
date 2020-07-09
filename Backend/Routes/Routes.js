const express = require('express');
const router = express.Router();

const controller = require('../Controllers/Controller');

/**Get detials from DB */
router.get('/measuresDetails', controller.getMeasures)

/** Saving to mongoDB */
router.post('/addMeasures', controller.addMeasures)

module.exports = router;