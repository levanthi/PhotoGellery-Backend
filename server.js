const startServer = (app) => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001!');
  });
};

export default startServer;
