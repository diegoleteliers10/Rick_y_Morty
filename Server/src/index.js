const http= require('http')
const data= require('./utils/data');

http.createServer((req,res)=>{

  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log('Server is up in: 3001')

  if(req.url.includes('/rickandmorty/character')){

    const id= parseInt(req.url.split('/').pop())
    const character= data.find(c=>c.id===id)
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(character))

  }else {

    res.writeHead(404, {"Content-Type":"text/plain"})
    return res.write("No se encontro el personaje")

  }
}).listen(3001,'localhost')