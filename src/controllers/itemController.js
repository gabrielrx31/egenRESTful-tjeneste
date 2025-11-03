//Import itemModel to interact with data
const itemModel = require('../models/itemModel');

//Function to get all items
exports.getAllItems = (req, res) => {
    res.json(itemModel.getAllItems());
};

//Function to get an item based on id
exports.getItemById = (req, res) => {
    const item = itemModel.getItemById(parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found'});
    }
};

//Function to create new item
exports.createItem = (req, res) => {
    const newItem = itemModel.createItem(req.body);
    res.status(201).json(newItem);
};

//Function to update an existing item based on id
exports.updateItem = (req, res) => {
    const updatedItem = itemModel.updateItem(parseInt(req.params.id), req.body);
    if (updatedItem) {
        res.json(updatedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

//Function to delete an item based on id
exports.deleteItem = (req, res) => {
    const deletedItem = itemModel.deleteItem(parseInt(req.params.id));
    if (deletedItem) {
        res.json(deletedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};