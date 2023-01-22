const multer = require('multer');
const fs = require('fs');


// configure storage for uploaded files
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public/images/');
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  module.exports={storage};