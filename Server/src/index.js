const http= require('http')
const data= require('./utils/data');
const getCharById= require('./controllers/getCharById')

http.createServer((req,res)=>{

  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log('Server is up in: 3001')

  if(req.url.includes('/rickandmorty/character')){
  
    const id= parseInt(req.url.split('/').pop())
    
    getCharById(res,id)
  }

}).listen(3001,'localhost')