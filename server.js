const { syncAndSeed } =  require('./db');
const app = require('./app');
require('dotenv').config();

const init = async()=> {
  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  await syncAndSeed();
  const port = process.env.PORT || 8080;
  app.listen(port, ()=> console.log(`listening on port ${port}`));
};

init();
