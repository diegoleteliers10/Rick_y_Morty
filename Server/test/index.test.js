const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS',()=>{
  describe('GET /rickandmorty/character/:id',()=>{
    it('Responde con status:200',async()=>{
      await agent.get('/rickandmorty/character/1').expect(200);
    })

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{

      const response= await agent.get('/rickandmorty/character/1')
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty('species');
      expect(response.body).toHaveProperty('gender');
      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('origin');
      expect(response.body).toHaveProperty('image');
    })

    it('Si hay un error responde con status: 500',async()=>{
      const response= await agent.get('/rickandmorty/character/1000');
      expect(response.status).toBe(500);
    })
  })

  describe("GET /rickandmorty/login",()=>{
    it('Deberia tener acceso al sistema',async()=>{
      const myEmail= "diegoleteliers10@gmail.com"
      const myPasssword="Sofi2009"
      const response= (await agent.get(`/rickandmorty/login?email=${myEmail}&password=${myPasssword}`))

      expect(response.body.access).toBe(true)
    })

    it('Deberia no tener acceso al sistema',async()=>{
        const noProfile= {
        email: "pepito10@gmail.com",
        password: "Lana2020"
        }
        const errResponse= (await agent.get(`/rickandmorty/login?email=${noProfile.email}&password=${noProfile.password}`))

        expect(errResponse.body.access).toBe(false)
    })

  })


  describe("POST /rickandmorty/fav",()=>{
      it('Deberia agregar un personaje a favoritos',async()=>{
        const char={
          "id": "1",
          "name": "Rick Sanchez",
          "species": "Human",
          "gender": "Male",
          "status": "Alive",
          "origin": "Earth"
        }
        const char2={
          "id": "2",
          "name": "Morty Smith",
          "species": "Human",
          "gender": "Male",
          "status": "Alive",
          "origin": "Earth"
        }
        const response = await agent.post("/rickandmorty/fav").send(char)
        const newResponse = await agent.post("/rickandmorty/fav").send(char2)

        expect(response.body).toEqual([char]);
        expect(newResponse.body).toEqual([char,char2]);

      })
  })

  describe('DELETE /rickandmorty/fav/:id',()=>{
    it('La lista sigue igual, por lo que no se elimino ningun personaje.',async()=>{
      const response= await agent.delete('/rickandmorty/fav')
      expect(response.body).toEqual({});
    })

    it('Deberia eliminar el personaje con el id sugerido',async()=>{
      const response= await agent.delete('/rickandmorty/fav/1')
      
      expect(response.body).toEqual([{
          id: '2',
          name: 'Morty Smith',
          species: 'Human',
          gender: 'Male',
          status: 'Alive',
          origin: 'Earth'
        }])
    })
  })
})

