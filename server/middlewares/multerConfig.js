const multer = require('multer');

// configure storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // define the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop()) // generate unique file name
  }
});

// configure multer middleware
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 1024 * 1024 }, // set maximum file size limit to 1MB
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
      return cb(new Error('Only .png, .jpg and .jpeg format allowed'));
    }
    cb(null, true);
  }
});

module.exports = upload;
