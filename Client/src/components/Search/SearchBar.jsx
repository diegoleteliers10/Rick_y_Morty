
import React from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   let personajes= props.characters

   

   let [id,setId]=React.useState('')

   const handleChange= (event)=>{
      let myId=event.target.value
      setId(myId)
   }

   const Click= ()=>{
      if(personajes.find(persona=>persona.id===parseInt(id))){
         alert('Este personaje ya se encuentra en la lista')
      }else {
         props.onSearch(id)
         setId('')
      }
   }

   const clickRandom= ()=>{
      let newNumber= Math.floor(Math.random()*826)+1
      if(personajes.find(persona=>persona.id===newNumber)){
         alert('Este personaje ya se encuentra en la lista')
      }else {
         props.onSearch(newNumber)
      }

   }

   return (
      <div className={style.buttonNav}>
         <input className={style.input} type='search' value={id} onChange={handleChange}/>

         <button className ={style.but1} onClick={Click}>Agregar</button>
         <button className= {style.but2} onClick={clickRandom}>Random</button>

      </div>
   );
}
