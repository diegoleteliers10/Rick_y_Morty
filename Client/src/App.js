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


   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response= await axios(URL + `?email=${email}&password=${password}`)
         const { access } = response.data;
         setAccess(access);
         access && navigate('/home');
      }
      catch(error){
         window.alert('No se pudo iniciar sesion');
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

   const [characters, setCharacters]= React.useState([])

   async function onSearch(id){
     try{
      const response= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      const {data} = response
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
     } 
     catch(error){
      window.alert('No se pudo encontrar la base de datos');
     }
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
