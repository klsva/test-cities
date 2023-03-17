import express from 'express';
import apiRouter from './routes/index.js';
import { errorHandler } from './middlewares/error-handler.js';
import cors from 'cors';

const app = express();
let server;
app.use(express.json());
app.use(cors());

//routes
app.use('/api', apiRouter);
app.use(errorHandler);

//server
export default {
  async start(port) {
    try {
      server = app.listen(port, () => {
        console.log(`Server is listening on ${port} port`);
      });
      return server;
    } catch(err){
      console.log(err);
    }  
  },

  async stop() {
    console.log(`\nTrying to close the server..\n`);
    return server.close();
  },
};