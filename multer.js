import multer from 'multer';

const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, 'uploads/');
  // },
  // filename: (req, file, cb) => {
  //   cb(null, file.fieldname + '-' + Date.now().toString().replace(/:/g, '-'));
  // },
});
const upload = multer({ storage: storage });

export default upload;
