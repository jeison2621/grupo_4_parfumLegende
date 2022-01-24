const multer = require('multer');
const path   = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/images/products'))},

  filename: function (req, file, cb) {
      
      cb(null, 'perfume' + '-' + Date.now()+ path.extname(file.originalname));  
    }
  })
  
  const upload = multer({ storage: storage })

module.exports = upload;