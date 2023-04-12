import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import axios from 'axios';
import Nav from './components/Nav/Nav';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail'
import Form from './components/Form/Form'
import { useLocation } from "react-router-dom";
import Favorites from './components/Favorites/Favorites';
 

function App() {

   const navigate= useNavigate()
   let [access,setAccess]= useState(false)
   const email= "diegoleteliers10@gmail.com"
   const password= "Sofi2009"

   function login(userData){
      if(userData.password===password && userData.email===email){
         setAccess(true)
         navigate('/home')
      }
   }

   function logout(userData){
      setAccess(false)
      navigate('/')
   }

   useEffect(()=>{
      if(access===false){
         navigate('/')
      }
   },[access, navigate])


   const URL='https://be-a-rym.up.railway.app/api'
   const APIK='f09f3edb2c49.3caf1676e006de54e304'
   const [characters, setCharacters]= React.useState([])

   const onSearch= (id)=>{
      axios(`${URL}/character/${id}?key=${APIK}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose=(id)=>{
      const distintos = characters.filter(personaje=> personaje.id !== id);
      setCharacters(distintos)
   }
    let location = useLocation()
    let isLocation= location.pathname==='/'

   return (


      <div className='App'>

         {isLocation? 
            <Form prop={login}/> : <Nav characters={characters} onSearch= {onSearch} logOut={logout} />
         }
            <div className='container'>
               <Routes>
                  <Route path='/home' element={<Cards characters={characters} Close={onClose}/>} />
                  <Route path='/about' element={<About/>}/>
                  <Route path='/detail/:id' element={<Detail id={characters}/>}/>
                  <Route path='/favorite' element={<Favorites Close={onClose}/>}/>
               </Routes>
            </div>
         
      </div>
   );
}

export default App;
