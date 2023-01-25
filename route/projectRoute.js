const express = require('express')
const { signup, login } = require('../controller/loginAndSignupController')
const { storeProduct, all_product_details, deleteProduct } = require('../controller/productController')
const multer = require('multer');
const fs = require('fs');
const storage = require('../configuration/multer.js')
const router = express.Router();
const jwtMiddleware = require('../middleware/jwtMiddleware');

const upload = multer(storage);

router.post('/signup', signup);
router.post('/login', login);
router.post('/api/product/store-data', upload.single('image'), storeProduct);
router.get('/api/product/productDetails', jwtMiddleware, all_product_details);
router.delete('/api/product/deleteproduct/:id', jwtMiddleware, deleteProduct);


module.exports = { router };