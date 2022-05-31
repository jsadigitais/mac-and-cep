import getMAC from 'getmac'


class MacController {
  async search(req, res) {
    
    const macAdress = getMAC()
    return res.status(200).json({ mac: macAdress});
    
       
  }
}

export default new MacController();



  

