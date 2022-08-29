import { Router } from 'express';
import fs from 'fs';
import photoModel from './Model/photo.model.js';
import upload from './multer.js';

const router = Router();

router.get('/', async (req, res) => {
  const photos = await photoModel.find({}).sort({ createdAt: -1 });
  res.send(photos);
});

router.post('/upload', upload.single('photo'), (req, res) => {
  if (req.file) {
    const photo = {
      contentType: req.file.mimetype,
      data: fs.readFileSync(req.file.path),
    };
    photoModel.create(photo, (err, result) => {
      if (err) console.log(err);
      else {
        console.log('Saved To database');
        res.contentType(photo.contentType);
        res.send(result);
      }
    });
  } else {
    console.log(new Error('No file detected!'));
  }
});

router.post('/uploads', upload.array('photo', 99), (req, res) => {
  if (req.files) {
    const photos = req.files.map((file) => {
      return {
        contentType: file.mimetype,
        data: fs.readFileSync(file.path),
      };
    });
    photoModel
      .insertMany(photos)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log(new Error('No file detected!'));
  }
});
export default router;
