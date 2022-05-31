import express from 'express';
import routes from './routes';
import cors from 'cors';


class App {
  constructor() {
    this.server = express();
    
    this.middlewares();
    this.routes();
  }

  middlewares() {
    
    let corsOptions = {
      origin: '*',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
    
    this.server.use(cors(corsOptions));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
