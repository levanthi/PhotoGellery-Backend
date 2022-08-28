import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import corsOptions from './cors.js';
import startServer from './server.js';
import router from './route.js';

dotenv.config();

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Staring server
startServer(app);

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log('Connect to Mongodb failed!');
    else {
      console.log('Connect to MongoDB success!');
    }
  }
);

app.use('/', router);
