import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

const Detail=(props)=>{
  let {id}= useParams(props.id)
  
  let [character,setCharacter]=useState({})


useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);

  const renderOrigin= (origin)=>{
    if(origin){
      return origin.name
    }
    else{
      return null
    }
  }

  return (
    <div className={style.contCharacter}>
      <section className={style.Detail}>
      <h1 className={style.characH1}>{character.name}</h1>
      <br />
      <h2 className={style.chaH2}>STATUS| {character.status} </h2>
      <h2 className={style.chaH2}>GENDER| {character.gender} </h2>
      <h2 className={style.chaH2}>SPECIE| {character.species}</h2>
      <h2 className={style.chaH2}>ORIGIN| {renderOrigin(character.origin)}</h2>
      </section>
      <section>
        <img className={style.imCha} src={character.image} alt={character.name} />
      </section>
 

    </div>
  )
}

export default Detail