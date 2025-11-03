//Import express and create an express application
const express = require('express');
const app = express();
//Import itemRoutes to handle /items routes
const itemRoutes = require('./routes/itemRoutes');
//Import logger middleware for logging requests
const logger = require('./middleware/logger');

//Middleware to parse JSON-data in requests
app.use(express.json());
//Middleware to log requests
app.use(logger);

//Use itemRoutes to handle all the routes that start with /items
app.use('/items', itemRoutes);

//Define a simple GET-route to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the REST API!');
});

//Middleware for error handling
app.use((err, req, res, next) => {
    //Log error
    console.error(err.stack);
    //Send a 500 status with a error message
    res.status(500).json({ message: 'Something broke' });
});

//Middleware to handle 404 - not found
app.use((req, res, next) => {
    //Send 404 status with error message
    res.status(404).json({ message: 'Not found' });
});

//Export express application
module.exports = app;