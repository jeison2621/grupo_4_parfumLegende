const multer = require('multer');
const path   = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/images/users'))},

  filename: function (req, file, cb) {
      /*const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9+file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix)*/ 
      /*corrigiendo el nombre del archivo para el multer*/
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));  
    }
  })
  
  const upload = multer({ storage: storage })

module.exports = upload;