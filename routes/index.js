const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');
const execiseController = require('../controllers/execeiseController')

router.get('/photo',photoController.show);
router.post('/photo',photoController.input);

router.get('/two',execiseController.two);
router.get('/hello',execiseController.three);
router.get('/world',execiseController.four);

router.get('/temp',execiseController.temp);
router.get('/colour',execiseController.colour);

router.get('/sql',execiseController.seclect);

module.exports = router;