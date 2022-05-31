import cep from 'cep-promise';

class CepController {

  async search(req, res) {

    const { cod_postal } = req.params;
   
     cep(cod_postal)
    .then(
      function(value) {  return res.status(200).json({response:value}) },
      function(error) {  
        if(cod_postal.length !== 8){
          return res.status(400).json({
             error: 'Cep deve ser com 8 caracteres'
          }) 
        }
        return res.status(400).json({error: 'Cep inválido ou não encontrado'}) 
      }
    )
  }
 

}

export default new CepController();
