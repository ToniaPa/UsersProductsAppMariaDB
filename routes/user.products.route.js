const express = require('express');
const router = express.Router(); 

const userProductController = require('../controllers/user.products.controller');

router.get('/', userProductController.findAll);
router.get('/:username', userProductController.findOne);
router.post('/:username', userProductController.create);
router.patch('/:username', userProductController.update);
// router.delete('/:username/products/:id', userProductController.delete);
router.delete('/:username/products/:id', userProductController.delete);

module.exports = router;