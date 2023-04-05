import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import axios from 'axios';

import Nav from './components/Nav/Nav';

import { Routes, Route } from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail'

function App() {

   const [characters, setCharacters]= React.useState([])

   const onSearch= (id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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

   return (


      <div className='App'>
         <Nav characters={characters} onSearch= {onSearch} />
         <div className='container'>
            <Routes>
               <Route path='/home' element={<Cards characters={characters} Close={onClose}/>} />
               <Route path='/about' element={<About/>}/>
               <Route path='/detail/:id' element={<Detail id={characters}/>}/>
            </Routes>


         </div>
      </div>
   );
}

export default App;
