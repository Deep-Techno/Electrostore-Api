const express=require('express')
const {signup,login}=require('../controller/loginAndSignupController')
const{storeProduct}=require('../controller/productController')
const multer = require('multer');
const fs = require('fs');
const storage=require('../configuration/multer.js')
const router=express.Router();

const upload = multer(storage );

router.post('/signup',signup);
router.post('/login',login);
router.post('/api/product/store-data',upload.single('image'),storeProduct);


module.exports={router};