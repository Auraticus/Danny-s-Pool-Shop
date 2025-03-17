// Start Generation Here
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const services = require('./routes/_services.router.js'); // Import the routes
const products = require('./routes/_products.router.js'); // Import the routes
const email = require('./routes/_email.router.js'); // Import the routes
const app = express();
var path = require('path');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

app.use('/api/products', products);
app.use('/api/email', email);
app.use('/api/services', services);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
