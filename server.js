import dotenv from 'dotenv';
dotenv.config();
const startServer = (app) => {
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3001!');
  });
};

export default startServer;
