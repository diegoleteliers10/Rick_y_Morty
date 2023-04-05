import style from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards(props) {
   const personajes= props.characters

   const newCaract= personajes.map((personaje)=>{
      return (
            <Card 
               id={personaje.id}
               key={personaje.id}
               name={personaje.name}
               status={personaje.status}
               species={personaje.species}
               gender={personaje.gender}
               origin={personaje.origin.name}
               image={personaje.image}
               onClose={()=> props.Close(personaje.id)}
            />


      )
      
   });

   return (
   <div>
      <ul className={style.cartas} >
         {newCaract}
      </ul>
   </div>
   )
}
