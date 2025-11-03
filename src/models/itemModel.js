//Create list to save items
let items = [];

module.exports = {
    //Function to get all items
    getAllItems: () => items,
    //Function to get one item based on id
    getItemById: id => items.find(item => item.id === id),
    //Function to create item
    createItem: item => {
        //Give new id to item
        item.id = items.length + 1;
        //Add item to list
        items.push(item);
        return item;
    },
    //Function to update existing item based on id
    updateItem: (id, updatedItem) => {
        //Find idex for item based on id
        let index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            //Update item with new data
            items[index] = { ...items[index], ...updatedItem };
            return items[index];
        }
        return null;
    },

    //Function to delete an item based on id
    deleteItem: id => {
        //Find index for item based on id
        let index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            //Remove item from list and return it
            return items.splice(index, 1);
        }
        return null;
    }
};