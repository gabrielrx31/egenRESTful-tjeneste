//Middleware function for logging of requests
module.exports = (req, res, next) => {
    //Log request method and url
    console.log(`${req.method} request for '${req.url}'`);
    //Go to the next middleware or route
    next();
};