//Import express and create a router
const express = require('express');
const router = express.Router();
//Import itemController to handle route requests
const itemController = require('../controllers/itemController');

//Define routes and bind them to controller functions
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

//Export router
module.exports = router;
