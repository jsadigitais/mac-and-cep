import { Router } from 'express';

import CepController from './app/controllers/CepController';
import MacController from './app/controllers/MacController';

const routes = new Router();

routes.get('/mac', MacController.search);

routes.get('/cep/:cod_postal', CepController.search);

routes.get('/teste', (req,res)=>{

  
    
    return res.status(200).json({response:'teste ok'})
})


routes.use( function(req,res,next){
    res.status(404).json({response:"rota nao existe"})
})


export default routes;
