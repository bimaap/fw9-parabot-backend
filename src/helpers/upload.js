const cloudinary = require('./cloudinary')
const path = require('path');
const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage ({
  cloudinary:cloudinary,
  params : {
    folder: 'parabot',
    format: async (req,file) => {
      // console.log(req);
      const ext = file.mimetype.split('/')[1];
      // console.log(ext)
      // console.log(file);
      return ext;
    },
    public_id: (req,file) => new Date().getTime()+Math.random(1000)
    // {
    //   const timeStamp = new Date().getTime()
    //   return `${timeStamp}`
    // }
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1000 * 1000,
  },
  fileFilter: (req, file, cb) => {
    const allowExt = ['image/jpg', 'image/png', 'image/jpeg', 'image/webp'];
    if (allowExt.includes(file.mimetype)) {
      cb(null, true);
    } else {
      const err = new Error('Extension not supported');
      cb(err, false);
    }
  },
});

module.exports = upload;
