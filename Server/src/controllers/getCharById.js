const url = "https://rickandmortyapi.com/api/character"
const axios= require('axios')

function getCharById(req, res) {
  const {id} = req.params;
  axios(`${url}/${id}`)
    .then(response => response.data)
    .then(({status,name,species,origin,image,gender})=>{
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
        console.log(character)
      }else{
        return res.status(404).send('Not found')
      }
    })
    .catch(error => res.status(500).send(error.message))
}

module.exports = getCharById ;