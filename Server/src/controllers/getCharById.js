const url = "https://rickandmortyapi.com/api/character"
const axios= require('axios')

async function getCharById(req,res){
  try{
    const {id}= req.params;
    const response= await axios(`${url}/${id}`)
    const {status,name,species,origin,image,gender} = response.data;
    if(name){
      const character={
        id,
        name,
        species,
        origin:origin.name,
        image,
        gender,
        status
      }
      res.json(character)
    }else{
      return res.status(404).send('Not found')
    }
  }
  catch(error){
    res.status(500).send(error.message);
  }
}

module.exports = getCharById ;