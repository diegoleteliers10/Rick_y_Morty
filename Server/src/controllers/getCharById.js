const axios= require('axios')

getCharById= (res,id)=>{
  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response=>{
    let char= {
      id: id,
      name: response.data.name,
      gender : response.data.gender,
      species: response.data.species,
      origin: response.data.origin.name.toString(),
      image: response.data.image,
      status: response.data.status
    };
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify(char))
  })
  .catch(error=>{
    res.writeHead(500,{'Content-Type':'text/plain'})
    res.end(error.message)
  })
}

module.exports=
getCharById;